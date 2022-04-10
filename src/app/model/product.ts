import { PRODUCT_SOURCE, PRODUCT_STATUS } from '../@core/constant/common';

export interface Product {
    id?: number;
    name: string;
    imei: string;
    color: string;
    status: PRODUCT_STATUS;
    quantity: number;
    price: number;
    position: PRODUCT_SOURCE;
    source: PRODUCT_SOURCE;
    created_at?: Date;
    updated_at?: Date;
}
