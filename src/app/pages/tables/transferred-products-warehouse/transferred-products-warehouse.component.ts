import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';

@Component({
    selector: 'ngx-transferred-products-warehouse',
    templateUrl: './transferred-products-warehouse.component.html',
    styleUrls: ['./transferred-products-warehouse.component.scss'],
})
export class TransferredProductsWarehouseComponent implements OnInit {

    originalData = [];
    data = [];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    transferredProductsFilter: {
        imei: string,
        transfer_date: Date | string,
    } = {
        imei: '',
        transfer_date: null,
    };

    constructor(
        private kaiService: KaiService,
        private datePipe: DatePipe,
    ) {
    }

    ngOnInit() {
        this.getShopJPTransferredProducts();
    }

    getShopJPTransferredProducts() {
        this.kaiService.getShopJPTransferredProducts().subscribe(products => {
            this.originalData = products;
            this.data = products;
        });
    }

    onLostProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.lostProduct(
            transferringProduct.invoice_id, transferringProduct.product_id,
        )
            .subscribe((result) => {
                this.getShopJPTransferredProducts();
            });
    }

    onCancelTransferProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.cancelTransferProduct(
            transferringProduct.invoice_id, transferringProduct.product_id,
        )
            .subscribe((result) => {
                this.getShopJPTransferredProducts();
            });
    }

    onSearchTransferredProducts(event) {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.transferredProductsFilter.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.transferredProductsFilter.imei.toLowerCase()),
            );
        }

        if (notEmpty(this.transferredProductsFilter.transfer_date)) {
            this.data = this.data.filter(x => {
                return this.datePipe.transform(x.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                    === this.datePipe.transform(
                        this.transferredProductsFilter.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT);
            });
        }
    }
}
