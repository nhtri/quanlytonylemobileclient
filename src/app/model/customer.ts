import { JOB_TYPE } from '../@core/constant/common';

export interface Customer {
  id?: number;
  name_vietnamese: string;
  name_japanese: string;
  birthday: Date | string;
  age: number;
  address: string;
  phone: string;
  job: JOB_TYPE;
  created_at?: Date;
  updated_at?: Date;
  payment_method: string;
  bank_name: string;
  branch_name: string;
  bank_id: string;
  account_name: string;
}
