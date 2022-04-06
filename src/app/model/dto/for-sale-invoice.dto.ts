import { ProductDto } from './product.dto';

export interface ForSaleInvoiceDto {
    quantity: number;
    total_money: number;
    sale_date: Date | string;
    products: ProductDto[];
}
