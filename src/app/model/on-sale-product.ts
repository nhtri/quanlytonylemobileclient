import { Product } from './product';

export interface OnSaleProduct extends Product {
    name_vietnamese: string;
    invoice_id: number;
}
