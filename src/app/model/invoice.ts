import { Customer } from './customer';
import { Product } from './product';
import { PAYMENT_TYPE } from '../@core/constant/common';

export interface Invoice {
  id: number;
  invoice_id?: number;
  sale_date: Date | string;
  quantity: number;
  total_money: number;
  payment_type?: PAYMENT_TYPE;
  created_at?: Date;
  updated_at?: Date;
  products?: Product[];
  customer?: Customer;
}
