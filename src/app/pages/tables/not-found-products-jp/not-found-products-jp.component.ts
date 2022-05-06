import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';

@Component({
    selector: 'ngx-not-found-products-jp',
    templateUrl: './not-found-products-jp.component.html',
    styleUrls: ['./not-found-products-jp.component.scss'],
})
export class NotFoundProductsJpComponent implements OnInit {

    originalData = [];
    data = [];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    notFoundProductsFilter: {
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
        this.getShopJPNotFoundProducts();
    }

    getShopJPNotFoundProducts() {
        this.kaiService.getShopJPNotFoundProducts().subscribe(products => {
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
                this.getShopJPNotFoundProducts();
            });
    }

    onCancelTransferProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.cancelTransferProduct(
            transferringProduct.invoice_id, transferringProduct.product_id,
        )
            .subscribe((result) => {
                this.getShopJPNotFoundProducts();
            });
    }

    onSearchNotFoundProducts(event) {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.notFoundProductsFilter.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.notFoundProductsFilter.imei.toLowerCase()),
            );
        }

        if (notEmpty(this.notFoundProductsFilter.transfer_date)) {
            this.data = this.data.filter(x => {
                return this.datePipe.transform(x.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                    === this.datePipe.transform(
                        this.notFoundProductsFilter.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT);
            });
        }
    }

}
