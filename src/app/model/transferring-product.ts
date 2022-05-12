import { TRANSFER_STATUS } from '../@core/constant/common';

export interface TransferringProduct {
    product_id: number;
    group_name?: string;
    name: string;
    imei: string;
    status: TRANSFER_STATUS;
    transfer_date: Date | string;
    invoice_id: number;
}
