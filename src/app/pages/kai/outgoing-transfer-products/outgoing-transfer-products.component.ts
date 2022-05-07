import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'ngx-outgoing-transfer-products',
    templateUrl: './outgoing-transfer-products.component.html',
    styleUrls: ['./outgoing-transfer-products.component.scss'],
})
export class OutgoingTransferProductsComponent implements OnInit {

    originalData = [];
    data = [];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    outgoingTransferProductsFilter: {
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
        this.getKaiOutgoingProducts();
    }

    getKaiOutgoingProducts() {
        this.kaiService.getKaiOutgoingProducts().subscribe(products => {
            this.originalData = products;
            this.data = products;
        });
    }

    onTransferProduct = (event, outgoingProduct) => {
        event.preventDefault();
        this.kaiService.transferProduct(outgoingProduct.invoice_id, outgoingProduct.product_id)
            .subscribe((result) => {
                this.getKaiOutgoingProducts();
            });
    }

    onSearchOutgoingProducts = (event) => {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.outgoingTransferProductsFilter.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.outgoingTransferProductsFilter.imei.toLowerCase()),
            );
        }

        if (notEmpty(this.outgoingTransferProductsFilter.transfer_date)) {
            this.data = this.data.filter(x => {
                return this.datePipe.transform(x.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                    === this.datePipe.transform(
                        this.outgoingTransferProductsFilter.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT);
            });
        }
    }
}
