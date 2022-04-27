import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT, DEFAULT_BIRTHDAY_YEAR_RANGE } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { Router } from '@angular/router';

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

    constructor(private kaiService: KaiService, private router: Router) {
    }

    ngOnInit() {
        this.getTransferProducts();
    }

    getTransferProducts() {
        this.kaiService.getAllKaiProducts().subscribe(products => {
            this.originalData = products;
            this.data = products;
        });
    }

    onSearchProduct(event) {
        event.preventDefault();
    }

}
