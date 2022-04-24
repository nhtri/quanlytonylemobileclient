import { Component, OnInit } from '@angular/core';
import {
    DATE_CONSTANT,
    PEOPLE_JOBS,
    PRODUCT_COLORS,
    PRODUCT_SOURCE,
    PRODUCT_STATUSES,
    TODAY,
} from '../../../@core/constant/common';
import { Customer } from '../../../model/customer';
import { PurchasingInvoiceDto } from '../../../model/dto/purchasing-invoice.dto';
import { Product } from '../../../model/product';
import { FormBuilder } from '@angular/forms';
import { KaiService } from '../../../services/kai.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { isEmpty, notEmpty } from '../../../@core/utils/data.utils';
import { getAge } from '../../../@core/utils/date.utils';
import { KAI_PAGES } from '../../../@core/constant/pages.constant';
import { ExcelService } from '../../../services/excel.service';

@Component({
    selector: 'ngx-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {

    invoice: PurchasingInvoiceDto = null;
    customer: Customer = {
        address: '',
        age: 0,
        birthday: undefined,
        job: undefined,
        name_japanese: '',
        name_vietnamese: '',
        phone: '',
    };
    selectedJobs = PEOPLE_JOBS[0].value;
    birthday: Date;
    jobs = PEOPLE_JOBS;
    selectedStatus = PRODUCT_STATUSES[0];
    products: Product[] = [];
    status = PRODUCT_STATUSES;
    customers = [];
    suggestCustomers: Customer[] = [];
    displaySuggestModal: boolean = false;
    displaySpinner: boolean = false;
    selectedCustomer: Customer = null;
    editData: any;
    sale_date: Date;
    customer_id = null;
    invoice_id = 0;

    productColors = PRODUCT_COLORS;

    PURCHASING_REPORT_NAME = 'InvoiceReport';
    CURRENT_DATE = TODAY;

    constructor(private formBuilder: FormBuilder,
                private kaiService: KaiService,
                private excelService: ExcelService,
                private router: Router,
                public datePipe: DatePipe) {
    }

    ngOnInit() {
        this.editData = window.history.state;
        this.sale_date = new Date();
        if (this.editData.invoice_id) {
            this.kaiService.getPurchasingInvoiceDetail(this.editData.invoice_id).subscribe((invoiceDetail) => {
                if (notEmpty(invoiceDetail)) {
                    this.products = invoiceDetail.products;
                    this.customer_id = invoiceDetail.customer.id;
                    this.invoice_id = invoiceDetail.invoice_id;
                    this.customer = invoiceDetail.customer;
                    this.birthday = new Date(this.customer.birthday);
                    this.sale_date = new Date(invoiceDetail.sale_date);
                    if (isEmpty(this.selectedJobs)) {
                        this.selectedJobs = PEOPLE_JOBS[0].value;
                        this.customer.job = this.selectedJobs;
                    }
                }
            });
        }
    }

    onChangeStatus(value, index) {
        this.products[index].status = value.value;
    }

    onChangeColor(value, index) {
        this.products[index].color = value.color;
    }

    onChangeQuantity(product, index) {
        this.products[index].quantity = +product.quantity;
    }

    onChangePrice(product, index) {
        this.products[index].price = +product.price;
    }

    onChangeBirthday() {
        this.customer.birthday = this.datePipe.transform(this.birthday, DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
        this.customer.age = getAge(this.birthday);
        if (notEmpty(this.customer.birthday)) {
            this.displaySpinner = true;
            this.kaiService.searchCustomer({
                search_type: 'BIRTHDAY',
                query: {birthday: this.customer.birthday},
            })
                .subscribe(customers => {
                    if (notEmpty(customers)) {
                        this.suggestCustomers = customers;
                        this.displaySuggestModal = true;
                    } else {
                        // Fill with null mean clear
                        this.autofillCustomer(null);
                    }
                    this.displaySpinner = false;
                });
        }
    }

    addProduct() {
        this.products.push({
            name: null,
            imei: null,
            color: null,
            status: this.selectedStatus.value,
            quantity: 0,
            price: 0,
            position: PRODUCT_SOURCE.KAI,
            source: PRODUCT_SOURCE.KAI,
        });
    }

    autofillCustomer(item) {
        if (item !== null) {
            this.customer = item;
            this.customer.birthday = this.datePipe.transform(item.birthday, DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
            this.invoice.customer.id = this.customer.id;
            const job = this.jobs.find(x => x.value === this.customer.job);
            if (job) {
                this.selectedJobs = job.value;
                this.customer.job = job.value;
            } else {
                this.selectedJobs = PEOPLE_JOBS[0].value;
                this.customer.job = null;
            }
        } else {
            this.customer.id = null;
            this.customer.address = null;
            this.selectedJobs = PEOPLE_JOBS[0].value;
            this.customer.job = this.selectedJobs;
            this.customer.phone = null;
            this.invoice.customer.id = 0;
        }
    }

    onChangeJob(selectedJob) {
        this.customer.job = selectedJob.value;
    }

    get totalMoney() {
        let totalMoney = 0;
        this.products.forEach((product) => totalMoney += +product.quantity * +product.price);
        return totalMoney;
    }

    get getQuantity() {
        let totalQuantity = 0;
        this.products.forEach((product) => totalQuantity += +product.quantity);
        return totalQuantity;
    }

    onSubmit() {
        this.invoice = {
            invoice_id: this.invoice_id,
            customer: this.customer,
            products: this.products,
            sale_date: this.datePipe.transform(this.sale_date, DATE_CONSTANT.TECHNICAL_DATE_FORMAT),
            total_money: this.totalMoney,
            quantity: this.getQuantity,
            position: PRODUCT_SOURCE.KAI,
        };
        this.kaiService.purchasingInvoice(this.invoice).subscribe((purchasingInvoiceDetail) => {
            if (notEmpty(purchasingInvoiceDetail)) {
                alert(`Lưu Thành Công`);
                this.router.navigate([KAI_PAGES.DATA_PURCHASING_INVOICES]).then(r => r);
            }
        });
    }

    onSelectCustomer(event) {
        this.autofillCustomer(event.data);
        this.displaySuggestModal = false;
    }

    onUnSelectCustomer(event) {
        this.displaySuggestModal = false;
    }

    removeProduct(index) {
        if (this.products[index].id != null) {
            this.products[index].id = -1;
        } else {
            this.products.splice(index, 1);
        }
    }

    cloneProduct(index) {
        const {name, imei, status, color, quantity, price} = this.products[index];
        this.products.splice(index, 0,
            {name, imei, status, color, quantity, price, position: PRODUCT_SOURCE.KAI, source: PRODUCT_SOURCE.KAI},
        );
    }

    // Only Integer Numbers
    keyPressNumbers(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        // Only Numbers 0-9
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        } else {
            return true;
        }
    }

    delete() {
        const isDel = confirm(`Bạn có chắc chắn muốn xóa đơn thu mua của ${this.customer.name_vietnamese} không?`);
        if (isDel) {
            if (notEmpty(this.invoice_id) && this.invoice_id > 0) {
                this.kaiService.deletePurchasingInvoice(this.invoice_id).subscribe(
                    res => {
                        alert('Xóa Thành Công');
                        this.router.navigate([KAI_PAGES.DATA_PURCHASING_INVOICES]).then(r => r);
                    },
                    error => {

                    },
                );
            }
        }
    }

    cancel() {
        const isCancel = confirm(`Bạn có chắc chắn muốn hủy thay đổi không?`);
        if (isCancel) {
            this.router.navigate([KAI_PAGES.DATA_PURCHASING_INVOICES]).then(r => r);
        }
    }

    exportExcel() {
        if (notEmpty(this.invoice_id) && this.invoice_id > 0) {
            this.kaiService.downloadPurchasingInvoice(this.invoice_id).subscribe(bufferResponse => {
                this.excelService.saveAsExcelFile(bufferResponse, this.PURCHASING_REPORT_NAME);
            });
        }
    }

    saveAndExport() {
        this.invoice = {
            invoice_id: this.invoice_id,
            customer: this.customer,
            products: this.products,
            sale_date: this.datePipe.transform(this.sale_date, DATE_CONSTANT.TECHNICAL_DATE_FORMAT),
            total_money: this.totalMoney,
            quantity: this.getQuantity,
        };

        this.kaiService.saveAndDownloadPurchasingInvoice(this.invoice).subscribe(bufferResponse => {
            this.excelService.saveAsExcelFile(bufferResponse, this.PURCHASING_REPORT_NAME);
            alert(`Lưu Thành Công`);
            this.router.navigate([KAI_PAGES.DATA_PURCHASING_INVOICES]).then(r => r);
        });
    }
}
