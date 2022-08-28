import { Component, OnInit } from '@angular/core';
import {
    DATE_CONSTANT,
    DEFAULT_BIRTHDAY_YEAR_RANGE,
    JOB_TYPE,
    PEOPLE_JOBS,
    TODAY,
} from '../../../@core/constant/common';
import { FormBuilder } from '@angular/forms';
import { KaiService } from '../../../services/kai.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { getAge, parseDate } from '../../../@core/utils/date.utils';
import { Customer } from '../../../model/customer';
import { KAI_PAGES } from '../../../@core/constant/pages.constant';

@Component({
    selector: 'ngx-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss'],
})

export class CustomerComponent implements OnInit {

    birthdayYearRange = DEFAULT_BIRTHDAY_YEAR_RANGE;
    editData: any;
    customer: Customer = {
        name_vietnamese: null,
        name_japanese: null,
        phone: null,
        birthday: null,
        job: PEOPLE_JOBS[0].value,
        age: 0,
        address: null,
        payment_method: null,
        bank_name: null,
        branch_name: null,
        bank_id: null,
        account_name: null

    };
    jobs = PEOPLE_JOBS;
    selectedJob: JOB_TYPE = PEOPLE_JOBS[0].value;
    selectedpayment_method
    birthday: Date;

    payment_method = [
        { label: '当座預金', value: '当座預金' },
        { label: '普通預金', value: '普通預金' }
    ]

    TODAY = TODAY;

    constructor(private formBuilder: FormBuilder,
        private kaiService: KaiService,
        private router: Router,
        public datePipe: DatePipe,
    ) {
    }

    getData() {
        const { id, name_vietnamese, name_japanese, birthday, age, address, phone, job, payment_method,
            bank_name,
            branch_name,
            bank_id,
            account_name } = this.editData;
        this.customer = {
            id,
            name_vietnamese,
            name_japanese,
            birthday,
            age,
            address,
            phone,
            job,
            payment_method,
            bank_name,
            branch_name,
            bank_id,
            account_name
        };
        this.birthday = parseDate(this.customer.birthday.toString());
        const customerJob = this.jobs.find(j => j.value === this.customer.job);
        if (customerJob) {
            this.selectedJob = customerJob.value;
        }
    }

    ngOnInit() {
        this.selectedpayment_method = this.payment_method[0].value;
        this.editData = window.history.state;
        if (this.editData.id) {
            this.getData();
        }

    }

    onChangeJob(event) {
        this.customer.job = this.selectedJob;
    }

    onChangePayment(event) {
        this.selectedpayment_method = event.target.value
    }

    birthdayChange() {
        this.customer.birthday = this.datePipe.transform(this.birthday, DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
        this.customer.age = getAge(parseDate(this.customer.birthday, DATE_CONSTANT.TECHNICAL_DATE_FORMAT));
    }

    onCancel() {
        const isOk = confirm(`Bạn có muốn hủy bỏ các thay đổi không?`);
        if (isOk === true) {
            this.router.navigateByUrl(KAI_PAGES.DATA_CUSTOMERS).then(r => r);
        }
    }

    onSubmit() {
        this.customer.birthday = this.datePipe.transform(this.birthday, DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
        if (this.customer.id) {
            this.kaiService.updateCustomer(this.customer).subscribe(x => {
                alert('Lưu Thành Công');
                this.router.navigateByUrl(KAI_PAGES.DATA_CUSTOMERS).then(r => r);
            },
                error => {
                    throw error;
                });
        } else {
            if (this.customer.bank_name != null && this.customer.account_name != null && this.customer.branch_name != null) {
                this.kaiService.createCustomer(this.customer).subscribe(x => {
                    alert('Lưu Thành Công');
                    this.router.navigateByUrl(KAI_PAGES.DATA_CUSTOMERS).then(r => r);
                },
                    error => {
                        throw error;
                    });
            }
            else {
                alert("Vui lòng điền đầy đủ thông tin Tên Ngân Hàng, Tên Chi Nhánh và Tên Chủ Tài Khoản")
            }
        }

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

}
