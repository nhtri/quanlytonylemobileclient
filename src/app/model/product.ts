import { PRODUCT_SOURCE, PRODUCT_STATUS, TRANSFER_STATUS } from '../@core/constant/common';

export interface Product {
    id?: number;
    name: string;
    imei: string;
    color: string;
    status: PRODUCT_STATUS;
    quantity: number;
    transfer_quantity?: number;
    transfer_status?: TRANSFER_STATUS;
    price: number;
    position: PRODUCT_SOURCE;
    source: PRODUCT_SOURCE;
    created_at?: Date;
    updated_at?: Date;
}
