import { PAYMENT_METHOD } from '../@core/constant/common';

export interface InvoicePayment {
    id?: number;
    invoice_id: number;
    invoice_code: string;
    bank_id: string;
    bank_name?: string;
    branch_name: string;
    account_name: string;
    payment_method: PAYMENT_METHOD;
    created_at?: Date | string;
    updated_at?: Date | string;
}
