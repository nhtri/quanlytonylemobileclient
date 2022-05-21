import { Component, OnInit } from '@angular/core';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { Product } from '../../../model/product';
import { notEmpty, notNull } from '../../../@core/utils/data.utils';
import { ForSaleInvoiceDto } from '../../../model/dto/for-sale-invoice.dto';
import { ProductDto } from '../../../model/dto/product.dto';
import { TransferInvoiceDto } from '../../../model/dto/transfer-invoice.dto';
import {
    DATE_CONSTANT,
    PRODUCT_COLOR,
    PRODUCT_COLORS,
    PRODUCT_SOURCE, PRODUCT_STATUSES,
    PRODUCT_STORAGES,
} from '../../../@core/constant/common';
import { calculateProductSummary } from '../../../@core/utils/kai.utils';
import { ProductGroup } from '../../../model/product-group';

@Component({
    selector: 'ngx-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

    originalData = [];
    data = [];
    searchNameText = '';
    searchImeiText = '';
    listProducts = [];
    displayForSaleModal: boolean = false;
    displayTransferModal = false;
    mobileSearch: {
        product_group_id: string,
        color: string,
        status: string,
        name: string,
        imei: string,
    } = {
        product_group_id: '',
        color: '',
        status: '',
        name: null,
        imei: null,
    };
    selectedMobiles = [];
    transferInvoice: TransferInvoiceDto;
    productStorages = PRODUCT_STORAGES;
    transferSource: PRODUCT_SOURCE = PRODUCT_SOURCE.KAI;
    transferDestination: PRODUCT_SOURCE = PRODUCT_SOURCE.SHOP_JP;
    rate_exchange: number = 1;
    sub_fee: number = 0;

    SHOP_VN_SOURCE = PRODUCT_SOURCE.SHOP_VN;

    productGroups: ProductGroup[];
    productColors = PRODUCT_COLORS;
    productStatuses = PRODUCT_STATUSES;

    constructor(private kaiService: KaiService, public datePipe: DatePipe) {
    }

    ngOnInit() {
        this.getMobiles();
        this.productStorages = PRODUCT_STORAGES.filter(ps => ps.value !== PRODUCT_SOURCE.KAI);
        this.kaiService.getProductGroups().subscribe((productGroups) => {
            this.productGroups = productGroups;
        });
    }

    getMobiles() {
        this.kaiService.getAllKaiProducts().subscribe(kaiProducts => {
            this.originalData = kaiProducts;
            this.data = JSON.parse(JSON.stringify(this.originalData));
            this.data.map((x) => x['isSelected'] = false);
        });
    }

    getSelectedProducts() {
        this.listProducts = this.originalData.filter(x => this.selectedMobiles.indexOf(x.id) !== -1);
        this.listProducts.map((product: Product) => {
            product.transfer_quantity = 1;
            product['salePrice'] = 0;
        });
    }

    onSelectItem(event, rowData) {
        const index = this.selectedMobiles.indexOf(rowData.id);
        if (index === -1) {
            this.selectedMobiles.push(rowData.id);
        } else {
            this.selectedMobiles.splice(index, 1);
        }
        this.data.find((item) => item.id === rowData.id).isSelected = !rowData.isSelected;
    }

    onSearchMobiles(event) {
        this.data = JSON.parse(JSON.stringify(this.originalData));

        if (notEmpty(this.mobileSearch.name)) {
            this.data = this.data.filter(
                (x: Product) => x.name.toLowerCase().includes(this.mobileSearch.name.toLowerCase()),
            );
        }

        if (notEmpty(this.mobileSearch.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.mobileSearch.imei.toLowerCase()),
            );
        }

        if (notEmpty(this.mobileSearch.product_group_id)) {
            this.data = this.data.filter(
                (x) => x.product_group_id === +this.mobileSearch.product_group_id,
            );
        } else {
            this.data = this.data.filter(
                (x) => x.product_group_id != null,
            );
        }

        if (notEmpty(this.mobileSearch.color)) {
            this.data = this.data.filter(
                (x) => x.color === this.mobileSearch.color,
            );
        } else {
            this.data = this.data.filter(
                (x) => x.color != null,
            );
        }

        if (notEmpty(this.mobileSearch.status)) {
            this.data = this.data.filter(
                (x) => x.status === this.mobileSearch.status,
            );
        } else {
            this.data = this.data.filter(
                (x) => x.status != null,
            );
        }

        // Set Selected Item after do filter
        this.data.map((x) => {
            x.isSelected = this.selectedMobiles.indexOf(x.id) !== -1;
        });
    }

    onShowForSaleDialog() {
        const allMobiles = JSON.parse(JSON.stringify(this.originalData));
        this.listProducts = allMobiles.filter(x => this.selectedMobiles.indexOf(x.id) !== -1);
        this.listProducts.forEach(x => x['salePrice'] = 0);
        this.listProducts.forEach(x => x['transferQuantity'] = 1);
        this.displayForSaleModal = true;
    }

    onShowTransferDialog() {
        this.getSelectedProducts();
        this.displayTransferModal = true;
    }

    onRowEditInit(data) {
        const index = this.listProducts.findIndex(x => x.id = data.id);
        if (index > -1) {
            this.listProducts.splice(index, 1);
        }

        const selectedIndex = this.selectedMobiles.findIndex(id => id === data.id);
        if (selectedIndex > -1) {
            this.selectedMobiles.splice(selectedIndex, 1);
        }

        this.data.find((item) => item.id === data.id).isSelected = false;
    }

    createTransferInvoice() {
        if (this.transferSource !== this.transferDestination) {
            const sale_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
            const from_position: PRODUCT_SOURCE = this.transferSource;
            const to_position: PRODUCT_SOURCE = this.transferDestination;
            const products = this.listProducts.map((product: Product) => {
                return {
                    id: product.id,
                    price: product.price,
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
                exchange_rate,
                sub_fee,
                products,
                transfer_date,
            };
            this.kaiService.createTransferInvoice(this.transferInvoice).subscribe(val => {
                alert('Lưu Thành Công');
                this.getMobiles();
                this.displayTransferModal = false;
            });
        }
    }

    createForSaleInvoice() {
        const date = new Date();
        const products = this.listProducts.map(x => {
            return {
                id: x.id,
                quantity: 1, // @Todo: Work-Around only: Should add new field quantity in create invoice form
                price: x['salePrice'],
            } as ProductDto;
        });
        const total_money = products.map(mobile => mobile.price).reduce((a, b) => +a + +b, 0);
        const forSaleInvoiceDto: ForSaleInvoiceDto = {
            products,
            total_money,
            quantity: products.length,
            sale_date: this.datePipe.transform(date, 'yyyy-MM-dd'),
        };
        this.kaiService.createForSaleInvoice(forSaleInvoiceDto).subscribe(val => {
            alert('Lưu Thành Công');
            this.getMobiles();
            this.displayForSaleModal = false;
        });

    }

    onChangeTransferSource(source: PRODUCT_SOURCE) {
        this.transferSource = source;
    }

    onChangeTransferDestination(source: PRODUCT_SOURCE) {
        this.transferDestination = source;
        if (this.transferSource !== this.transferDestination && this.transferDestination !== PRODUCT_SOURCE.SHOP_VN) {
            this.rate_exchange = 1.0;
            this.sub_fee = 0;
        }
    }

}
