import { Product } from '../../model/product';
import { ProductSummary } from '../../model/product-summary';
import { notEmpty } from './data.utils';

export const calculateProductSummary = (
    products: Product[],
    exchange_rate: number = null,
    exchange_sub_fee: number = null): ProductSummary => {
    const result: ProductSummary = {
        total_quantity: 0,
        total_money: 0,
        exchange_rate: 1,
        sub_fee: 0,
    };

    if (notEmpty(exchange_rate) && notEmpty(exchange_sub_fee)) {
        result.exchange_rate = exchange_rate;
        result.sub_fee = exchange_sub_fee;
    }

    products.forEach((product) => {
        const product_quantity = (notEmpty(product.transfer_quantity)) ? product.transfer_quantity : product.quantity;
        result.total_quantity += product_quantity;
        result.total_money += (product_quantity * product.price) * result.exchange_rate + result.sub_fee;
    });

    return result;
};
