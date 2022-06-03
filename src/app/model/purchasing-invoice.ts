import { Customer } from './customer';
import { InvoiceDetail } from './invoice-detail';
import { InvoicePayment } from './invoice-payment';
import { PAYMENT_TYPE } from '../@core/constant/common';

export interface PurchasingInvoice extends InvoiceDetail {
    customer?: Customer;
    payment_type?: PAYMENT_TYPE;
    payment_detail?: InvoicePayment;
}
