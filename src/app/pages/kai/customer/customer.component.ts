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
    };
    jobs = PEOPLE_JOBS;
    selectedJob: JOB_TYPE = PEOPLE_JOBS[0].value;
    birthday: Date;

    TODAY = TODAY;

    constructor(private formBuilder: FormBuilder,
                private kaiService: KaiService,
                private router: Router,
                public datePipe: DatePipe,
    ) {
    }

    getData() {
        const {id, name_vietnamese, name_japanese, birthday, age, address, phone, job} = this.editData;
        this.customer = {
            id,
            name_vietnamese,
            name_japanese,
            birthday,
            age,
            address,
            phone,
            job,
        };
        this.birthday = parseDate(this.customer.birthday.toString());
        const customerJob = this.jobs.find(j => j.value === this.customer.job);
        if (customerJob) {
            this.selectedJob = customerJob.value;
        }
    }

    ngOnInit() {
        this.editData = window.history.state;
        if (this.editData.id) {
            this.getData();
        }
    }

    onChangeJob(event) {
        this.customer.job = this.selectedJob;
    }

    birthdayChange() {
        this.customer.birthday = this.datePipe.transform(this.birthday, DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
        this.customer.age = getAge(parseDate(this.customer.birthday, DATE_CONSTANT.TECHNICAL_DATE_FORMAT));
    }

    onCancel() {
        this.router.navigateByUrl(KAI_PAGES.DATA_CUSTOMERS).then(r => r);
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
            this.kaiService.createCustomer(this.customer).subscribe(x => {
                    alert('Lưu Thành Công');
                    this.router.navigateByUrl(KAI_PAGES.DATA_CUSTOMERS).then(r => r);
                },
                error => {
                    throw error;
                });
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
