import { Injectable } from '@angular/core';
import { QUAN_LY_TONY_SERVICE, SERVICE_RESOURCES } from '../@core/constant/common';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../model/invoice';
import { PurchasingInvoice } from '../model/purchasing-invoice';
import { Product } from '../model/product';
import { ForSaleInvoiceDto } from '../model/dto/for-sale-invoice.dto';
import { InvoiceDetail } from '../model/invoice-detail';
import RestService from '../@core/services/rest.service';
import { KaiRevenueStatistic } from '../model/kai-revenue-statistic';
import { StatisticFilterDto } from '../model/dto/statistic-filter.dto';
import { CustomerSearchDto } from '../model/dto/customer-search.dto';
import { PurchasingInvoiceDto } from '../model/dto/purchasing-invoice.dto';
import { PurchasingInvoiceSearchDto } from '../model/dto/purchasing-invoice-search.dto';

@Injectable({
    providedIn: 'root',
})
export class KaiService extends RestService {

    constructor(
        private httpClient: HttpClient,
    ) {
        super(httpClient, QUAN_LY_TONY_SERVICE);
    }

    getCustomers(): Observable<Customer[]> {
        return this.getAll<Customer[]>(SERVICE_RESOURCES.CUSTOMERS);
    }

    createCustomer(customer: Customer): Observable<Customer> {
        return this.create(SERVICE_RESOURCES.CUSTOMERS, customer);
    }

    updateCustomer(customer: Customer): Observable<Customer> {
        return this.update(`${SERVICE_RESOURCES.CUSTOMERS}`, customer);
    }

    deleteCustomer(customerId) {
        return this.remove(`${SERVICE_RESOURCES.CUSTOMERS}/${customerId}`);
    }

    searchCustomer(customerSearchParams: CustomerSearchDto): Observable<Customer[]> {
        return this.post<Customer[]>(`${SERVICE_RESOURCES.CUSTOMERS}/search`, customerSearchParams);
    }

    /**
     * =====================================
     * Invoices Management
     * =====================================
     */

    /**
     * Get all purchasing invoices
     */
    getPurchasingInvoices(): Observable<PurchasingInvoice[]> {
        return this.getAll<PurchasingInvoice[]>(SERVICE_RESOURCES.PURCHASING_INVOICES);
    }

    getPurchasingInvoiceDetail(invoiceId: number): Observable<PurchasingInvoice> {
        return this.getAll(`${SERVICE_RESOURCES.PURCHASING_INVOICES}/${invoiceId}`);
    }

    deletePurchasingInvoice(invoiceId: number): Observable<any> {
        return this.remove(`${SERVICE_RESOURCES.PURCHASING_INVOICES}/${invoiceId}`);
    }

    downloadPurchasingInvoice(invoiceId: number) {
        return this.http.get(this.requestUrl(`${SERVICE_RESOURCES.PURCHASING_INVOICES}/report/${invoiceId}`), {
            responseType: 'arraybuffer',
        });

    }

    saveAndDownloadPurchasingInvoice(purchasingInvoiceDto: PurchasingInvoiceDto) {
        return this.http.post(
            this.requestUrl(`${SERVICE_RESOURCES.PURCHASING_INVOICES}/save-and-report`),
            purchasingInvoiceDto,
            {
                responseType: 'arraybuffer',
            },
        );
    }

    purchasingInvoice(purchasingInvoiceDto: PurchasingInvoiceDto): Observable<PurchasingInvoice> {
        return this.post(`${SERVICE_RESOURCES.PURCHASING_INVOICES}`, purchasingInvoiceDto);
    }

    searchPurchasingInvoices(purchasingInvoiceSearchParams: PurchasingInvoiceSearchDto): Observable<Invoice[]> {
        return this.post<Invoice[]>(`${SERVICE_RESOURCES.PURCHASING_INVOICES}/search`, purchasingInvoiceSearchParams);
    }

    // Create For Sale Invoice
    createForSaleInvoice(forSaleInvoiceData: ForSaleInvoiceDto): Observable<InvoiceDetail> {
        return this.create(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}`, forSaleInvoiceData);
    }

    // Get all pending for sale invoices
    getPendingForSaleInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}/pending`);
    }

    getCompletedForSaleInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}/completed`);
    }

    // Get for sale invoice detail
    getKaiForSaleInvoiceDetail(invoiceId: number): Observable<InvoiceDetail> {
        return this.getAll<InvoiceDetail>(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}/kai/detail/${invoiceId}`);
    }

    // Cancel for sale invoice
    cancelForSaleInvoice(invoiceId: number): Observable<any> {
        return this.get<any>(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}/cancel/${invoiceId}`);
    }

    // Approve for sale invoice
    approveForSaleInvoice(forSaleInvoiceDto: ForSaleInvoiceDto, invoiceId: number): Observable<any> {
        return this.post<any>(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}/approve/${invoiceId}`, forSaleInvoiceDto);
    }

    // Get for sale invoice detail
    getKaiTransferringInvoiceDetail(invoiceId: number): Observable<InvoiceDetail> {
        return this.getAll<InvoiceDetail>(`${SERVICE_RESOURCES.TRANSFERRING_INVOICES}/kai/detail/${invoiceId}`);
    }

    // General Invoice
    getKaiPendingInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/pending/kai`);
    }

    getKaiCompletedInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/completed/kai`);
    }

    /**
     * =====================================
     * Product Management
     * =====================================
     */

    getAllKaiProducts(): Observable<Product[]> {
        return this.getAll<Product[]>(`${SERVICE_RESOURCES.PRODUCTS}/kai`);
    }

    /**
     * =====================================
     * Statistics Management
     * =====================================
     */

    /**
     * Get Kai Statistics
     * @param statisticFilter
     */
    getKaiStatistics(statisticFilter: StatisticFilterDto): Observable<KaiRevenueStatistic> {
        return this.post<KaiRevenueStatistic>(`${SERVICE_RESOURCES.STATISTICS}`, statisticFilter);
    }

}
