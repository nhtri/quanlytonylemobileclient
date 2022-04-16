import { PRODUCT_SOURCE } from '../../@core/constant/common';
import { ProductDto } from './product.dto';

export interface TransferInvoiceDto {
    sale_date: Date | string;
    total_quantity: number;
    total_money: number;
    from_position: PRODUCT_SOURCE;
    to_position: PRODUCT_SOURCE;
    exchange_rate: number;
    sub_fee: number;
    products?: ProductDto[];
}
