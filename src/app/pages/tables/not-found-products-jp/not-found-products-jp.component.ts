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

    isAscendingOrder: boolean;
    orderIcon = 'arrow-downward-outline';
role
    constructor(
        private kaiService: KaiService,
        private datePipe: DatePipe,
    ) {
        this.role=localStorage.getItem("role")
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
        const isOk = confirm(`Bạn có muốn hủy bỏ chuyển kho cho sản phẩm: ${transferringProduct.name} không?`);
        if (isOk === true) {
            this.kaiService.cancelTransferProduct(
                transferringProduct.invoice_id, transferringProduct.product_id,
            )
                .subscribe((result) => {
                    this.getShopJPNotFoundProducts();
                });
        }
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
