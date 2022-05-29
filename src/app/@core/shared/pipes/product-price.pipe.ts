import { Pipe, PipeTransform } from '@angular/core';
import { MONEY_SYMBOL, PRODUCT_SOURCE } from '../../constant/common';
import { notEmpty } from '../../utils/data.utils';
import { formatNumber } from '@angular/common';

@Pipe({
    name: 'productPrice',
})
export class ProductPricePipe implements PipeTransform {

    transform(value: number, shopSource: PRODUCT_SOURCE = PRODUCT_SOURCE.SHOP_JP): string {
        const isVNShop = notEmpty(shopSource) && shopSource === PRODUCT_SOURCE.SHOP_VN;
        const moneySymbol = isVNShop ? MONEY_SYMBOL.VND : MONEY_SYMBOL.JPY;
        const moneyStr = formatNumber(value, 'en-US').toString();
        return isVNShop ? `${moneyStr}${moneySymbol}` : `${moneySymbol}${moneyStr}`;
    }

}
