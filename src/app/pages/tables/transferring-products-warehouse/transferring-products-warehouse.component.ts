import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';

@Component({
    selector: 'ngx-transferring-products-warehouse',
    templateUrl: './transferring-products-warehouse.component.html',
    styleUrls: ['./transferring-products-warehouse.component.scss'],
})
export class TransferringProductsWarehouseComponent implements OnInit {

    originalData = [];
    data = [];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    transferringProductsFilter: {
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
        this.getWarehouseTransferringProducts();
    }

    getWarehouseTransferringProducts() {
        this.kaiService.getWarehouseTransferringProducts().subscribe(products => {
            this.originalData = products;
            this.data = products;
        });
    }

    onReceiveTransferProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.receiveTransferringProduct({
            invoice_id: transferringProduct.invoice_id,
            product_id: transferringProduct.product_id,
        })
            .subscribe((result) => {
                this.getWarehouseTransferringProducts();
            });
    }

    onLostProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.lostProduct(
            transferringProduct.invoice_id, transferringProduct.product_id,
        )
            .subscribe((result) => {
                this.getWarehouseTransferringProducts();
            });
    }

    onCancelTransferProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.cancelTransferProduct(
            transferringProduct.invoice_id, transferringProduct.product_id,
        )
            .subscribe((result) => {
                this.getWarehouseTransferringProducts();
            });
    }

    onSearchTransferringProducts(event) {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.transferringProductsFilter.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.transferringProductsFilter.imei.toLowerCase()),
            );
        }

        if (notEmpty(this.transferringProductsFilter.transfer_date)) {
            this.data = this.data.filter(x => {
                return this.datePipe.transform(x.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                    === this.datePipe.transform(
                        this.transferringProductsFilter.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT);
            });
        }
    }

}
