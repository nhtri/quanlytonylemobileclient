import { PRODUCT_SOURCE } from '../../@core/constant/common';

export interface ProductDto {
    id?: number;
    name?: string;
    imei?: string;
    color?: string;
    status?: string;
    quantity?: number;
    price?: number;
    position?: PRODUCT_SOURCE;
    source?: PRODUCT_SOURCE;
    group_name?: string;
    type_name?: string;
    capacity?: string;
    version?: string;
}
