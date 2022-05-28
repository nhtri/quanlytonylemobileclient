import { Component, OnInit } from '@angular/core';
import { KaiService } from '../../../services/kai.service';
import { ActivatedRoute, Router } from '@angular/router';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';
import { TransferInvoiceDto } from '../../../model/dto/transfer-invoice.dto';
import { DATE_CONSTANT, PRODUCT_SOURCE, PRODUCT_STORAGES } from '../../../@core/constant/common';
import { calculateProductSummary } from '../../../@core/utils/kai.utils';
import { DatePipe } from '@angular/common';
import { KAI_PAGES, SHOP_JP_PAGES, SHOP_VN_PAGES, SHOP_WAREHOUSE_PAGES } from '../../../@core/constant/pages.constant';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'ngx-transfer-products',
    templateUrl: './transfer-products.component.html',
    styleUrls: ['./transfer-products.component.scss'],
})
export class TransferProductsComponent implements OnInit {

    originalData = [];
    data = [];

    transferInvoice: TransferInvoiceDto;
    productStorages = PRODUCT_STORAGES;
    transferSource: PRODUCT_SOURCE;
    transferDestination: PRODUCT_SOURCE = PRODUCT_SOURCE.SHOP_JP;
    rate_exchange: number = 1;
    sub_fee: number = 0;

    SHOP_VN_SOURCE = PRODUCT_SOURCE.SHOP_VN;
    listProducts: Product[];

    productIds: number[];
    position: PRODUCT_SOURCE;

    pageTitle = '';
    navigationPage = '';

    isNormalUser: boolean;

    constructor(
        private kaiService: KaiService,
        private route: ActivatedRoute,
        private datePipe: DatePipe,
        private router: Router,
        private authService: AuthService,
        ) {
    }

    ngOnInit(): void {
        this.getTransferProducts();
        this.productStorages = PRODUCT_STORAGES.filter(ps => ps.value !== PRODUCT_SOURCE.KAI);
    }

    getTransferProducts() {
        this.route.queryParams
            .subscribe((params) => {
                if ((notEmpty(params.id))) {
                    let paramIds = params.id;
                    if (Array.isArray(params.id)) {
                        paramIds = params.id[0];
                    }
                    this.productIds = paramIds.split(',');
                }
                if (notEmpty(params.position)) {
                    if (Array.isArray(params.id)) {
                        this.position = params.position[0];
                    } else {
                        this.position = params.position;
                    }
                }
                this.transferSource = this.position;
                this.setupPage(this.position);
                this.kaiService.searchProducts({ids: this.productIds, position: this.position})
                    .subscribe((products) => {
                        const listProducts = products.map((product) => {
                            product['init_quantity'] = product.quantity;
                            return product;
                        });
                        this.originalData = listProducts;
                        this.data = listProducts;
                    });
            });

        this.isNormalUser = this.authService.isNormalUser();
    }

    setupPage(position: PRODUCT_SOURCE) {
        switch (position) {
            case PRODUCT_SOURCE.SHOP_VN:
                this.pageTitle = 'CHUYỂN KHO: KHO NGUỒN CỬA HÀNG VIỆT NAM';
                this.navigationPage = SHOP_VN_PAGES.DATA_PRODUCTS;
                break;
            case PRODUCT_SOURCE.SHOP_JP:
                this.pageTitle = 'CHUYỂN KHO: KHO NGUỒN CỬA HÀNG VIỆT NHẬT';
                this.navigationPage =  SHOP_JP_PAGES.DATA_PRODUCTS;
                break;
            case PRODUCT_SOURCE.WAREHOUSE:
                this.pageTitle = 'CHUYỂN KHO: KHO NGUỒN KHO HÀNG';
                this.navigationPage =  SHOP_WAREHOUSE_PAGES.DATA_PRODUCTS;
                break;
            case PRODUCT_SOURCE.KAI:
            default:
                this.pageTitle = 'CHUYỂN KHO: KHO NGUỒN KAI';
                this.navigationPage = KAI_PAGES.DATA_PRODUCTS;
                break;
        }
    }

    onChangeProductQuantity(event, product_id) {
        const new_quantity = event.target.value;
        const index = this.data.findIndex((p) => p.id === product_id);
        if (index !== -1) {
            this.data[index].quantity = +new_quantity;
        }
    }

    onChangeTransferDestination(event) {
        this.transferDestination = event.target.value;
        if (this.transferSource !== this.transferDestination && this.transferDestination !== PRODUCT_SOURCE.SHOP_VN) {
            this.rate_exchange = 1.0;
            this.sub_fee = 0;
        }
    }

    cancelTransferInvoice(event) {
        event.preventDefault();
        this.router.navigateByUrl(this.navigationPage).then(r => r);
    }

    createTransferInvoice(event) {
        event.preventDefault();
        this.listProducts = this.data;
        if (this.transferSource !== this.transferDestination) {
            const sale_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
            const from_position: PRODUCT_SOURCE = this.transferSource;
            const to_position: PRODUCT_SOURCE = this.transferDestination;
            const products = this.listProducts.map((product: Product) => {
                return {
                    id: product.id,
                    price: product.price,
                    estimated_price: product.estimated_price,
                    quantity: notEmpty(product.transfer_quantity) ? product.transfer_quantity : 1,
                };
            });
            let exchange_rate = this.rate_exchange;
            let sub_fee = this.sub_fee;
            if (this.transferDestination !== PRODUCT_SOURCE.SHOP_VN) {
                exchange_rate = 1;
                sub_fee = 0;
            }
            const productSummary = calculateProductSummary(this.listProducts, exchange_rate, sub_fee);
            const transfer_date = this.datePipe.transform(new Date(), DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
            this.transferInvoice = {
                sale_date,
                total_money: productSummary.total_money,
                total_quantity: productSummary.total_quantity,
                from_position,
                to_position,
                exchange_rate: +exchange_rate,
                sub_fee: +sub_fee,
                products,
                transfer_date,
            };
            this.kaiService.createTransferInvoice(this.transferInvoice).subscribe(val => {
                alert('Lưu Thành Công');
                this.router.navigateByUrl(this.navigationPage).then(r => r);
            });
        }
    }


}
