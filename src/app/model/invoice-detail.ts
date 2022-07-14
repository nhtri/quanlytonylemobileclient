import { Product } from './product';

export interface InvoiceDetail {
    invoice_id: number;
    quantity: number;
    total_money: number;
    sale_date: Date | string;
    locked?: boolean;
    type?: string;
    products?: Product[];
}
