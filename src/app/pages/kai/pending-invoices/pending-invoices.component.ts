import { Component, OnInit } from '@angular/core';
import { notEmpty } from '../../../@core/utils/data.utils';
import { DATE_CONSTANT, DEFAULT_BIRTHDAY_YEAR_RANGE } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { Product } from '../../../model/product';
import { isDate } from '../../../@core/utils/date.utils';
import { InvoiceDetail } from '../../../model/invoice-detail';

@Component({
    selector: 'ngx-pending-invoices',
    templateUrl: './pending-invoices.component.html',
    styleUrls: ['./pending-invoices.component.scss'],
})
export class PendingInvoicesComponent implements OnInit {

    originalData: InvoiceDetail[] = [];
    data: InvoiceDetail[] = [];
    searchText = '';
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    displayDetailModal: boolean = false;
    listProducts: Product[] = [];
    selectedProduct: any;
    order: any;
    fromDate: Date;
    toDate: Date;
    yearRange = DEFAULT_BIRTHDAY_YEAR_RANGE;
    orderSearch: {
        from_date: Date,
        to_date: Date,
    } = {
        from_date: null,
        to_date: null,
    };

    constructor(
        private kaiService: KaiService,
        public datePipe: DatePipe,
    ) {
    }

    ngOnInit() {
        this.getOrdersPending();
    }

    getOrdersPending() {
        this.kaiService.getPendingForSaleInvoices().subscribe(pendingForSaleInvoices => {
                this.originalData = pendingForSaleInvoices;
                this.data = pendingForSaleInvoices;
            },
        );
    }

    onShowDetail(event, rowData) {
        if (notEmpty(rowData)) {
            this.order = rowData;
            this.kaiService.getForSaleInvoiceDetail(rowData.invoice_id).subscribe((orderDetail) => {
                this.displayDetailModal = true;
                if (notEmpty(orderDetail)) {
                    this.listProducts = orderDetail.products;
                }
            });
        }
    }

    approveForSaleInvoice() {
        const products = this.listProducts.map(x => {
            return {
                id: x.id,
                price: x.price,
            };
        });
        const total_money = products.map(mobile => mobile['price']).reduce((a, b) => +a + +b, 0);
        const forSaleInvoiceDto = {
            products,
            total_money,
            id: this.order.id,
            sale_date: this.order.sale_date,
            quantity: products.length,
        };

        this.kaiService.approveForSaleInvoice(forSaleInvoiceDto, this.order.id).subscribe(val => {
            alert('Lưu Thành Công');
            this.getOrdersPending();
            this.displayDetailModal = false;
        });

    }

    cancelForSaleInvoice() {
        this.kaiService.cancelForSaleInvoice(this.order.id).subscribe((val) => {
            alert('Hủy Đơn Hàng Thành Công');
            this.getOrdersPending();
            this.displayDetailModal = false;
        });
    }

    onRemoveProduct = (product, event) => {
        this.listProducts = this.listProducts.filter(x => {
            return x.id !== product.mobileid;
        });
    }

    onSearchOrder = (event) => {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.orderSearch.from_date) && isDate(this.orderSearch.from_date)) {
            this.data = this.data.filter((x) => {
                const sent_date = new Date(x.sale_date);
                sent_date.setHours(0, 0, 0, 0);
                const from_date = new Date(this.orderSearch.from_date);
                from_date.setHours(0, 0, 0, 0);
                return sent_date >= from_date;
                // return new Date(x.sale_date) >= new Date(this.orderSearch.from_date)
            });
        }

        if (notEmpty(this.orderSearch.to_date) && isDate(this.orderSearch.to_date)) {
            this.data = this.data.filter((x) => {
                const sent_date = new Date(x.sale_date);
                sent_date.setHours(0, 0, 0, 0);
                const to_date = new Date(this.orderSearch.to_date);
                to_date.setHours(0, 0, 0, 0);
                return sent_date <= to_date;
                // return new Date(x.sale_date) <= new Date(this.orderSearch.to_date)
            });
        }
    }

}
