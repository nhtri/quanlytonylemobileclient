import { TransferringProduct } from './transferring-product';
import { PRODUCT_SOURCE } from '../@core/constant/common';

export interface OutgoingProduct extends TransferringProduct {
    to_position: PRODUCT_SOURCE;
}
