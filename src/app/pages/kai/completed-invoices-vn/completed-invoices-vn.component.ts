import { Component, OnInit } from '@angular/core';
import { notEmpty } from '../../../@core/utils/data.utils';
import { isDate } from '../../../@core/utils/date.utils';
import { KaiService } from '../../../services/kai.service';
import { DATE_CONSTANT, DEFAULT_BIRTHDAY_YEAR_RANGE } from '../../../@core/constant/common';
import { DatePipe } from '@angular/common';
import { InvoiceDetail } from '../../../model/invoice-detail';
import { Product } from '../../../model/product';

@Component({
    selector: 'ngx-completed-invoices-vn',
    templateUrl: './completed-invoices-vn.component.html',
    styleUrls: ['./completed-invoices-vn.component.scss'],
})
export class CompletedInvoicesVnComponent implements OnInit {
    originalData: InvoiceDetail[] = [];
    data: InvoiceDetail[] = [];
    searchText = '';
    cols = [
        {field: 'name_vietnamese', header: 'name_vietnamese'},
        {field: 'sale_date', header: 'sale_date'},
        {field: 'quantity', header: 'quantity'},
        {field: 'total_money', header: 'total_money'},
    ];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    displayDetailModal: boolean = false;
    listProducts: Product[] = [];
    selectedProduct: any;
    order: any;
    fromDate: Date;
    toDate: Date;
    yearRange = DEFAULT_BIRTHDAY_YEAR_RANGE;
    orderCompletedSearch: {
        from_date: Date | string,
        to_date: Date | string,
    } = {
        from_date: null,
        to_date: null,
    };

    constructor(
        private kaiService: KaiService, public datePipe: DatePipe) {
    }

    ngOnInit() {
        this.getOrdersCompleted();
    }

    getOrdersCompleted() {
        this.kaiService.getShopVnCompletedInvoices().subscribe(completedForSaleInvoices => {
                this.originalData = completedForSaleInvoices;
                this.data = completedForSaleInvoices;
            },
        );
    }

    onShowDetail(event, rowData) {
        this.listProducts = [];
        if (notEmpty(rowData)) {
            this.order = rowData;
            this.kaiService.getShopVNForSaleInvoiceDetail(rowData.invoice_id).subscribe((orderDetail) => {
                this.displayDetailModal = true;
                if (notEmpty(orderDetail)) {
                    this.listProducts = orderDetail.products;
                }
            });
        }
    }

    onSelectProduct(event) {
    }

    onDeSelectProduct(event) {
    }

    onSearchOrderCompleted = (event) => {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.orderCompletedSearch.from_date) && isDate(this.orderCompletedSearch.from_date)) {
            this.data = this.data.filter((x: any) => {
                const sent_date = new Date(x.sale_date);
                sent_date.setHours(0, 0, 0, 0);
                const from_date = new Date(this.orderCompletedSearch.from_date);
                from_date.setHours(0, 0, 0, 0);
                return sent_date >= from_date;
            });
        }
        if (notEmpty(this.orderCompletedSearch.to_date) && isDate(this.orderCompletedSearch.to_date)) {
            this.data = this.data.filter((x: any) => {
                const sent_date = new Date(x.sale_date);
                sent_date.setHours(0, 0, 0, 0);
                const to_date = new Date(this.orderCompletedSearch.to_date);
                to_date.setHours(0, 0, 0, 0);
                return sent_date <= to_date;
            });
        }
    }

}
