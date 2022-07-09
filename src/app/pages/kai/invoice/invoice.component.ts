import { Component, ElementRef, OnInit } from '@angular/core';
import {
    DATE_CONSTANT,
    PAYMENT_METHOD,
    PAYMENT_METHODS,
    PAYMENT_TYPE,
    PAYMENT_TYPES,
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
import { InvoicePayment } from '../../../model/invoice-payment';

@Component({
    selector: 'ngx-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {

    invoice: PurchasingInvoiceDto = {
        invoice_id: 0,
        position: undefined,
        products: [],
        quantity: 0,
        sale_date: null,
        total_money: 0,
        customer: null,
        payment_type: PAYMENT_TYPE.CASH,
        payment_detail: null,
    };
    customer: Customer = {
        address: '',
        age: 0,
        birthday: undefined,
        job: undefined,
        name_japanese: '',
        name_vietnamese: '',
        phone: '',
    };
    paymentInfo: InvoicePayment = {
        invoice_id: null,
        account_name: null,
        bank_id: null,
        bank_name: null,
        branch_name: null,
        invoice_code: null,
        payment_method: PAYMENT_METHOD.CHECKS_DEPOSIT,
    };
    selectedJobs = PEOPLE_JOBS[0].value;
    birthday: Date;
    jobs = PEOPLE_JOBS;
    selectedStatus = PRODUCT_STATUSES[0];
    products: Product[] = [];
    status = PRODUCT_STATUSES;
    product_groups = [];
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

    paymentTypes = PAYMENT_TYPES;
    transferPaymentType = PAYMENT_TYPE.TRANSFER;

    paymentMethods = PAYMENT_METHODS;

    PURCHASING_REPORT_NAME = 'InvoiceReport';
    CURRENT_DATE = TODAY;

    onsaving=false

    constructor(private formBuilder: FormBuilder,
                private elementRef: ElementRef,
                private kaiService: KaiService,
                private excelService: ExcelService,
                private router: Router,
                public datePipe: DatePipe) {
    }

    ngOnInit() {
        this.kaiService.getProductGroups().subscribe((groups) => {
            this.product_groups = groups.map(pg => {
                return {
                    value: pg.id,
                    label: pg.name,
                };
            });
        });
        this.editData = window.history.state;
        console.log('>>> this.editData: ', this.editData);
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
                    this.invoice.payment_type = invoiceDetail.payment_type;
                    if (notEmpty(invoiceDetail.payment_detail)) {
                        this.paymentInfo = invoiceDetail.payment_detail;
                    }
                }
            });
        }
    }

    onChangeStatus(event, index) {
        this.products[index].status = event.value;
    }

    onChangeProductGroup(event, index) {
        this.products[index].product_group_id = event.value;
    }

    onChangeColor(event, index) {
        this.products[index].color = event.value;
    }

    onChangeQuantity(product, index) {
        this.products[index].quantity = +product.quantity;
    }

    onChangePrice(product, index) {
        this.products[index].price = product.price;
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
            quantity: 1,
            price: 0,
            position: PRODUCT_SOURCE.SHOP_JP,
            source: PRODUCT_SOURCE.SHOP_JP,
        });
    }

    autofillCustomer(item) {
        if (item !== null) {
            this.customer = item;
            this.customer.birthday = this.datePipe.transform(item.birthday, DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
            this.invoice.customer = {id: this.customer.id} as Customer;
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
            this.invoice.customer = {id: 0} as Customer;
        }
    }

    onChangeJob(selectedJob) {
        this.customer.job = selectedJob.value;
    }

    get totalMoney() {
        let totalMoney = 0;
        this.products.forEach((product) => {
            if (product.id !== -1) {
                totalMoney += +product.quantity * +product.price;
            }
        });
        return totalMoney;
    }

    get getQuantity() {
        let totalQuantity = 0;
        this.products.forEach((product) => {
            if (product.id !== -1) {
                totalQuantity += +product.quantity;
            }
        });
        return totalQuantity;
    }

    onSubmit() {
        alert("Đang thực hiện quá trình thu mua !!!")
        this.onsaving = true
        let display_order = 1;
        const {payment_type} = this.invoice;
        const payment_detail = (payment_type === PAYMENT_TYPE.TRANSFER) ? this.paymentInfo : null;
        this.invoice = {
            invoice_id: this.invoice_id,
            customer: this.customer,
            products: this.products.map(p => {
                p.display_order = display_order;
                display_order++;
                return p;
            }),
            sale_date: this.datePipe.transform(this.sale_date, DATE_CONSTANT.TECHNICAL_DATE_FORMAT),
            total_money: this.totalMoney,
            quantity: this.getQuantity,
            position: PRODUCT_SOURCE.SHOP_JP,
            payment_type,
            payment_detail,
            payment_create_date: this.datePipe.transform(new Date(), DATE_CONSTANT.TECHNICAL_DATE_FORMAT),
        };
        this.kaiService.purchasingInvoice(this.invoice).subscribe((purchasingInvoiceDetail) => {
            if (notEmpty(purchasingInvoiceDetail)) {
                alert(`Lưu Thành Công`);
                this.router.navigate([KAI_PAGES.DATA_PURCHASING_INVOICES]).then(r => r);
            }
        });
    }

    onChangePaymentMethod(selectedPaymentMethod) {
        this.invoice.payment_type = selectedPaymentMethod;
        if (selectedPaymentMethod.value === PAYMENT_TYPE.CASH) {
            this.invoice.payment_detail = null;
        }
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

    gotoNextImei(event, next_index: number = 0) {
        event.preventDefault();
        const nextImeiElem = document.getElementById(`imei${next_index}`);
        if (notEmpty(nextImeiElem)) {
            nextImeiElem.focus();
        } else {
            return;
        }
    }

    cloneProduct(index) {
        const {name, imei, status, color, quantity, price, product_group_id} = this.products[index];
        this.products.splice(index + 1, 0,
            {
                name, imei, status, color, quantity, price,
                position: PRODUCT_SOURCE.SHOP_JP, source: PRODUCT_SOURCE.SHOP_JP, product_group_id,
            },
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

    lockInvoice() {
        if (notEmpty(this.invoice_id) && this.invoice_id > 0) {
            console.log('>>> Lock the invoice: ', this.invoice_id);
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
        alert("Đang thực hiện quá trình thu mua !!!")
        this.onsaving = true
        let display_order = 1;
        const {payment_type} = this.invoice;
        const payment_detail = (payment_type === PAYMENT_TYPE.TRANSFER) ? this.paymentInfo : null;
        this.invoice = {
            invoice_id: this.invoice_id,
            customer: this.customer,
            products: this.products.map(p => {
                p.display_order = display_order;
                display_order++;
                return p;
            }),
            sale_date: this.datePipe.transform(this.sale_date, DATE_CONSTANT.TECHNICAL_DATE_FORMAT),
            total_money: this.totalMoney,
            quantity: this.getQuantity,
            payment_type,
            payment_detail,
            payment_create_date: this.datePipe.transform(new Date(), DATE_CONSTANT.TECHNICAL_DATE_FORMAT),
        };

        this.kaiService.saveAndDownloadPurchasingInvoice(this.invoice).subscribe(bufferResponse => {
            this.excelService.saveAsExcelFile(bufferResponse, this.PURCHASING_REPORT_NAME);
            alert(`Lưu Thành Công`);
            this.router.navigate([KAI_PAGES.DATA_PURCHASING_INVOICES]).then(r => r);
        });
    }
}
