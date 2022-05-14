import { PRODUCT_SOURCE } from '../../@core/constant/common';

export interface SearchProductDto {
    ids: number[];
    position: PRODUCT_SOURCE;
}
