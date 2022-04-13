import { Customer } from '../customer';
import { ProductDto } from './product.dto';
import { PRODUCT_SOURCE } from '../../@core/constant/common';

export interface PurchasingInvoiceDto {
    invoice_id?: number;
    quantity: number;
    total_money: number;
    sale_date: Date | string;
    position?: PRODUCT_SOURCE;
    customer?: Customer;
    products: ProductDto[];
}
