import { Customer } from './customer';
import { Product } from './product';

export interface Invoice {
  id: number;
  invoice_id?: number;
  sale_date: Date | string;
  quantity: number;
  total_money: number;
  created_at?: Date;
  updated_at?: Date;
  products?: Product[];
  customer?: Customer;
}
