import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT } from '../../../@core/constant/common';
import { Invoice } from '../../../model/invoice';
import { KaiService } from '../../../services/kai.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { notEmpty } from '../../../@core/utils/data.utils';
import { KAI_PAGES } from '../../../@core/constant/pages.constant';
import { PurchasingInvoice } from '../../../model/purchasing-invoice';

@Component({
    selector: 'ngx-purchasing-invoices',
    templateUrl: './purchasing-invoices.component.html',
    styleUrls: ['./purchasing-invoices.component.scss'],
})
export class PurchasingInvoicesComponent implements OnInit {

    originalData: PurchasingInvoice[] = [];
    data: PurchasingInvoice[] = [];
    searchNameText = '';
    searchSaleDate = '';
    cols = [
        {field: 'name_vietnamese', header: 'name_vietnamese'},
        {field: 'sale_date', header: 'sale_date'},
        {field: 'quantity', header: 'quantity'},
        {field: 'total_money', header: 'total_money'},
    ];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    displayDetailModal: boolean = false;
    listProducts = [];
    selectedProduct: any;
    invoiceSearch: {
        name: string,
        sale_date: Date,
    } = {
        name: null,
        sale_date: null,
    };

    constructor(
        private kaiService: KaiService, private router: Router, public datePipe: DatePipe) {
    }

    ngOnInit() {
        this.kaiService.getPurchasingInvoices()
            .subscribe(invoices => {
                this.originalData = invoices;
                this.data = invoices;
            });
    }

    onShowDetail(event, rowData) {
        if (notEmpty(rowData)) {
            this.kaiService.getPurchasingInvoiceDetail(rowData.invoice_id).subscribe((purchasingInvoiceDetail) => {
                this.displayDetailModal = true;
                if (notEmpty(purchasingInvoiceDetail)) {
                    this.listProducts = purchasingInvoiceDetail.products;
                }
            });
        }
    }

    onSelectProduct(event) {
    }

    onDeSelectProduct(event) {
    }

    SearchChange() {
        if (this.searchNameText === '' && this.searchSaleDate === '') {
            this.data = JSON.parse(JSON.stringify(this.originalData));
        } else {
            const tempData = JSON.parse(JSON.stringify(this.originalData));
            if (this.searchNameText !== '' && this.searchSaleDate !== '') {
                this.data = tempData.filter(x => {
                    return x.name_vietnamese.includes(this.searchNameText)
                        && this.datePipe.transform(x.sale_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                        === this.searchSaleDate;
                });
            } else if (this.searchNameText !== '') {
                this.data = tempData.filter(x => {
                    return x.name_vietnamese.includes(this.searchNameText);
                });
            } else if (this.searchSaleDate !== '') {
                this.data = tempData.filter(x => {
                    return this.datePipe.transform(x.sale_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                        === this.searchSaleDate;
                });
            }
        }
    }

    onSearchInvoices($event) {
        this.data = this.originalData;
        if (notEmpty(this.invoiceSearch.name)) {
            this.data = this.data.filter(x => {

                return x.customer.name_vietnamese.toLowerCase().includes(this.invoiceSearch.name.toLowerCase());
            });
        }

        if (notEmpty(this.invoiceSearch.sale_date)) {
            this.data = this.data.filter(x => {
                return this.datePipe.transform(x.sale_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                    === this.datePipe.transform(this.invoiceSearch.sale_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT);
            });
        }
    }

    navigateToAddInvoice() {
        this.router.navigateByUrl(KAI_PAGES.PURCHASING_INVOICE).then(r => r);
    }

    onRowEditInit(rowData) {
        this.router.navigate([KAI_PAGES.PURCHASING_INVOICE], {state: rowData}).then(r => r);
    }

    onRowDelete(invoice, index) {
        const isDel = confirm(`Bạn có chắc chắn muốn xóa đơn thu mua của ${invoice.customer.name_vietnamese} không?`);
        if (isDel === true) {
            this.kaiService.deletePurchasingInvoice(invoice.invoice_id).subscribe(
                data => {
                    alert('Xóa Thành Công');
                    location.reload();
                },
                error => {
                    throw error;
                });
        }
    }

}
