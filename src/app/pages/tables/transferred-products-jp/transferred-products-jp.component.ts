import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';

@Component({
    selector: 'ngx-transferred-products-jp',
    templateUrl: './transferred-products-jp.component.html',
    styleUrls: ['./transferred-products-jp.component.scss'],
})
export class TransferredProductsJpComponent implements OnInit {

    originalData = [];
    data = [];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    transferredProductsFilter: {
        imei: string,
        transfer_date: Date | string,
        receive_date: Date | string,
    } = {
        imei: '',
        transfer_date: null,
        receive_date: null,
    };

    isAscendingOrder: boolean;
    orderIcon = 'arrow-downward-outline';

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

    onSortData(event) {
        event.preventDefault();
        this.isAscendingOrder = !this.isAscendingOrder;
        if (this.isAscendingOrder) {
            this.orderIcon = 'arrow-upward-outline';
        } else {
            this.orderIcon = 'arrow-downward-outline';
        }
        this.data.sort((a, b) => {
            if (this.isAscendingOrder) {
                if (a.transfer_date < b.transfer_date) {
                    return 1;
                }
                if (a.transfer_date > b.transfer_date) {
                    return -1;
                }
                return 0;
            } else {
                if (a.transfer_date > b.transfer_date) {
                    return 1;
                }
                if (a.transfer_date < b.transfer_date) {
                    return -1;
                }
                return 0;
            }
        });
    }

    onSearchTransferredProducts(event) {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.transferredProductsFilter.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.transferredProductsFilter.imei.toLowerCase()),
            );
        }

        if (notEmpty(this.transferredProductsFilter.receive_date)) {
            this.data = this.data.filter(x => {
                return this.datePipe.transform(x.receive_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                    === this.datePipe.transform(
                        this.transferredProductsFilter.receive_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT);
            });
        }
    }
}
