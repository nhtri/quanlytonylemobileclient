import { Injectable } from '@angular/core';
import ResetService from '../@core/services/reset.service';
import { QUAN_LY_TONY_SERVICE, SERVICE_RESOURCES } from '../@core/constant/common';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
    providedIn: 'root',
})
export class KaiService extends ResetService {
    constructor() {
        super(QUAN_LY_TONY_SERVICE);
    }

    getCustomers(): Observable<Customer[]> {
        return this.getAll<Customer[]>(SERVICE_RESOURCES.CUSTOMERS);
    }

    searchCustomers(query: any, search_type: 'BIRTHDAY'): Observable<Customer[]> {
        return this.getAll(`${SERVICE_RESOURCES.CUSTOMERS}/search`, {
            search_type,
            query,
        });
    }

    createCustomer(customer: Customer): Observable<Customer> {
        return this.create(SERVICE_RESOURCES.CUSTOMERS, customer);
    }

    updateCustomer(customer: Customer): Observable<Customer> {
        return this.update(customer.id, customer);
    }
}
