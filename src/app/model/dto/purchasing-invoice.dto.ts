import { Customer } from '../customer';
import { ProductDto } from './product.dto';
import { PAYMENT_TYPE, PRODUCT_SOURCE } from '../../@core/constant/common';
import { InvoicePayment } from '../invoice-payment';

export interface PurchasingInvoiceDto {
    invoice_id?: number;
    quantity: number;
    total_money: number;
    sale_date: Date | string;
    payment_type?: PAYMENT_TYPE;
    payment_detail?: InvoicePayment;
    payment_create_date?: Date | string;
    position?: PRODUCT_SOURCE;
    customer?: Customer;
    products: ProductDto[];
}
