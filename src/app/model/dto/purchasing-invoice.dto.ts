import { Customer } from '../customer';
import { ProductDto } from './product.dto';

export interface PurchasingInvoiceDto {
    invoice_id?: number;
    quantity: number;
    total_money: number;
    sale_date: Date | string;
    customer: Customer;
    products: ProductDto[];
}
