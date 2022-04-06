import { Customer } from './customer';
import { InvoiceDetail } from './invoice-detail';

export interface PurchasingInvoice extends InvoiceDetail {
    customer?: Customer;
}
