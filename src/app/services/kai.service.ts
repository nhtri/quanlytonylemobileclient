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
import { TransferInvoiceDto } from '../model/dto/transfer-invoice.dto';
import { OutgoingProduct } from '../model/outgoing-product';
import { IncomingProduct } from '../model/incoming-product';
import { ReceiveTransferProductDto } from '../model/dto/receive-transfer-product.dto';
import { ProductGroup } from '../model/product-group';
import { OnSaleProduct } from '../model/on-sale-product';

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

    getShopVNForSaleInvoiceDetail(invoiceId: number): Observable<InvoiceDetail> {
        return this.getAll<InvoiceDetail>(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}/shop-vn/detail/${invoiceId}`);
    }

    getShopJPForSaleInvoiceDetail(invoiceId: number): Observable<InvoiceDetail> {
        return this.getAll<InvoiceDetail>(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}/shop-jp/detail/${invoiceId}`);
    }

    getWarehouseForSaleInvoiceDetail(invoiceId: number): Observable<InvoiceDetail> {
        return this.getAll<InvoiceDetail>(`${SERVICE_RESOURCES.FOR_SALE_INVOICES}/warehouse/detail/${invoiceId}`);
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

    getShopVNTransferringInvoiceDetail(invoiceId: number): Observable<InvoiceDetail> {
        return this.getAll<InvoiceDetail>(`${SERVICE_RESOURCES.TRANSFERRING_INVOICES}/shop-vn/detail/${invoiceId}`);
    }

    getShopJPTransferringInvoiceDetail(invoiceId: number): Observable<InvoiceDetail> {
        return this.getAll<InvoiceDetail>(`${SERVICE_RESOURCES.TRANSFERRING_INVOICES}/shop-jp/detail/${invoiceId}`);
    }

    getWarehouseTransferringInvoiceDetail(invoiceId: number): Observable<InvoiceDetail> {
        return this.getAll<InvoiceDetail>(`${SERVICE_RESOURCES.TRANSFERRING_INVOICES}/warehouse/detail/${invoiceId}`);
    }

    cancelTransferringInvoiceProduct(invoiceId: number, productId: number): Observable<any> {
        return this.getAll<InvoiceDetail>(
            `${SERVICE_RESOURCES.TRANSFERRING_INVOICES}/cancel/${invoiceId}/${productId}`,
        );
    }

    approveTransferringInvoiceProduct(invoiceId: number, productId: number): Observable<any> {
        return this.getAll<InvoiceDetail>(
            `${SERVICE_RESOURCES.TRANSFERRING_INVOICES}/approve/${invoiceId}/${productId}`,
        );
    }

    approveTransferringInvoice(invoiceId: number): Observable<any> {
        return this.getAll<InvoiceDetail>(
            `${SERVICE_RESOURCES.TRANSFERRING_INVOICES}/approve/${invoiceId}`,
        );
    }

    cancelTransferringInvoice(invoiceId: number): Observable<any> {
        return this.getAll<InvoiceDetail>(
            `${SERVICE_RESOURCES.TRANSFERRING_INVOICES}/cancel/${invoiceId}`,
        );
    }

    // General Invoice
    getKaiPendingInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/pending/kai`);
    }

    getShopJpPendingInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/pending/shop-jp`);
    }

    getShopVnPendingInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/pending/shop-vn`);
    }

    getWarehousePendingInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/pending/warehouse`);
    }

    getKaiCompletedInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/completed/kai`);
    }

    getShopJPCompletedInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/completed/shop-jp`);
    }

    getShopVnCompletedInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/completed/shop-vn`);
    }

    getWarehouseCompletedInvoices(): Observable<InvoiceDetail[]> {
        return this.getAll<InvoiceDetail[]>(`${SERVICE_RESOURCES.INVOICES}/completed/warehouse`);
    }

    // Transfer Invoice
    createTransferInvoice(transferInvoiceDto: TransferInvoiceDto): Observable<any> {
        return this.create(`${SERVICE_RESOURCES.TRANSFERRING_INVOICES}`, transferInvoiceDto);
    }

    /**
     * =====================================
     * Product Management
     * =====================================
     */

    getAllProducts(): Observable<Product[]> {
        return this.getAll<Product[]>(`${SERVICE_RESOURCES.PRODUCTS}`);
    }

    getAllKaiProducts(): Observable<Product[]> {
        return this.getAll<Product[]>(`${SERVICE_RESOURCES.PRODUCTS}/kai`);
    }

    getKaiOnSaleProducts(): Observable<OnSaleProduct[]> {
        return this.getAll<OnSaleProduct[]>(`${SERVICE_RESOURCES.PRODUCTS}/on-sale/kai`);
    }

    /**
     * ======================================
     * TRANSFERRING
     * ======================================
     */
    transferProduct(invoice_id, product_id): Observable<any> {
        return this.getAll<any>(`${SERVICE_RESOURCES.TRANSFERRING}/${invoice_id}/${product_id}`);
    }

    receiveTransferringProduct(receiveTransferProductDto: ReceiveTransferProductDto): Observable<any> {
        return this.update<any>(`${SERVICE_RESOURCES.TRANSFERRING}/receive`, receiveTransferProductDto);
    }

    lostProduct(invoice_id, product_id): Observable<OutgoingProduct[]> {
        return this.getAll<OutgoingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/lost/${invoice_id}/${product_id}`);
    }

    cancelTransferProduct(invoice_id, product_id): Observable<OutgoingProduct[]> {
        return this.getAll<OutgoingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/cancel/${invoice_id}/${product_id}`);
    }

    getKaiOutgoingProducts(): Observable<OutgoingProduct[]> {
        return this.getAll<OutgoingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/outgoing/kai`);
    }

    getShopJPOutgoingProducts(): Observable<OutgoingProduct[]> {
        return this.getAll<OutgoingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/outgoing/shop-jp`);
    }

    getShopVNOutgoingProducts(): Observable<OutgoingProduct[]> {
        return this.getAll<OutgoingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/outgoing/shop-vn`);
    }

    getWarehouseOutgoingProducts(): Observable<OutgoingProduct[]> {
        return this.getAll<OutgoingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/outgoing/warehouse`);
    }

    getShopJPTransferringProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/shop-jp`);
    }

    getShopJPTransferredProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/received/shop-jp`);
    }

    getShopJPNotFoundProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/not-found/shop-jp`);
    }

    getShopVNTransferringProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/shop-vn`);
    }

    getShopVNTransferredProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/received/shop-vn`);
    }

    getShopVNNotFoundProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/not-found/shop-vn`);
    }

    getWarehouseTransferringProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/warehouse`);
    }

    getWarehouseTransferredProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/received/warehouse`);
    }

    getWarehouseNotFoundProducts(): Observable<IncomingProduct[]> {
        return this.getAll<IncomingProduct[]>(`${SERVICE_RESOURCES.TRANSFERRING}/not-found/warehouse`);
    }

    /**
     * =======================
     * Product Groups
     * ======================
     */
    getProductGroups(): Observable<ProductGroup[]> {
        return this.getAll<ProductGroup[]>(`${SERVICE_RESOURCES.PRODUCT_GROUPS}`);
    }

    createProductGroup(name: string): Observable<ProductGroup> {
        return this.create(`${SERVICE_RESOURCES.PRODUCT_GROUPS}`, {name});
    }

    updateProductGroup(productGroupData: any): Observable<ProductGroup> {
        return this.put(`${SERVICE_RESOURCES.PRODUCT_GROUPS}`, productGroupData);
    }

    deleteProductGroup(productGroupId: number): Observable<any> {
        return this.remove<any>(`${SERVICE_RESOURCES.PRODUCT_GROUPS}/${productGroupId}`);
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
