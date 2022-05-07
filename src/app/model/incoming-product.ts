import { TransferringProduct } from './transferring-product';
import { PRODUCT_SOURCE } from '../@core/constant/common';

export interface IncomingProduct extends TransferringProduct {
    from_position: PRODUCT_SOURCE;
    receive_date?: Date | string;
}
