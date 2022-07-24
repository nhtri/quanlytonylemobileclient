import {Injectable} from '@angular/core';
import {notEmpty} from '../../../utils/data.utils';
import {MONEY_SYMBOL, PRODUCT_SOURCE} from '../../../constant/common';

export const enum CURRENCY_SYMBOL_POSITION  {
    LEFT = 'left',
    RIGHT = 'right',
    NONE = 'none',
}

@Injectable()
export class CurrencyMaskService {
    decimalSeparator: string;
    thousandsSeparator: string;
    symbol: string;
    symbolPosition: CURRENCY_SYMBOL_POSITION;

    constructor() {
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.symbol = '';
        this.symbolPosition = CURRENCY_SYMBOL_POSITION.NONE;
    }

    transform(value: string, shopSource: PRODUCT_SOURCE = null, allowNegative = false, decimalPrecision: number = 0) {
        if (value === undefined || value === '') {
            return null;
        }

        if (notEmpty(shopSource)) {
            switch (shopSource) {
                case PRODUCT_SOURCE.SHOP_VN:
                    this.symbol = MONEY_SYMBOL.VND;
                    this.symbolPosition = CURRENCY_SYMBOL_POSITION.RIGHT;
                    break;
                case PRODUCT_SOURCE.SHOP_JP:
                case PRODUCT_SOURCE.WAREHOUSE:
                    this.symbol = MONEY_SYMBOL.JPY;
                    this.symbolPosition = CURRENCY_SYMBOL_POSITION.LEFT;
                    break;
                default:
                    this.symbol = '';
                    this.symbolPosition = CURRENCY_SYMBOL_POSITION.NONE;
            }
        }

        if (allowNegative) {
            value = value.toString();
            if (value.startsWith('(') || value.startsWith('-')) {
                value = '-' + value.substr(1, value.length).replace(/\(|\)|\$|\-/g, '');
            } else {
                value = value.replace(/\(|\)|\$|\-/g, '');
            }
        }
        let [integer, fraction = ''] = (value || '').toString().split(this.decimalSeparator);
        fraction = decimalPrecision > 0 ? this.decimalSeparator + (fraction + '000000').substring(0, 2) : '';
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        // If user types .xx we can display 0.xx
        if (integer === '') {
            integer = '0';
        } else if (integer.startsWith(MONEY_SYMBOL.JPY)) {
            // If there are multiple transforms, remove the previous dollar sign (blur and change at the same time)
            integer = integer.substr(1, integer.length);
        } else if (integer.endsWith(MONEY_SYMBOL.VND)) {
            integer = integer.substr(0, integer.length - 1);
        } else if (allowNegative && integer.startsWith('-')) {
            // If user inputs negative number set to paranthesis format
            integer = integer.substr(1, integer.length);
            return this.display(integer, fraction, true);
        }
        return this.display(integer, fraction);
    }

    parse(value: string, allowNegative = false) {
        let [integer, fraction = ''] = (value || '').split(this.decimalSeparator);
        integer = integer.replace(new RegExp(/[^\d\.]/, 'g'), '');
        fraction = parseInt(fraction, 10) > 0 && 2 > 0 ? this.decimalSeparator + (fraction + '000000').substring(0, 2) : '';
        if (allowNegative && value.startsWith('(') && value.endsWith(')')) {
            return (-1 * parseFloat(integer + fraction)).toString();
        } else {
            return integer + fraction;
        }
    }

    display(integer: string = '', fraction: string = '', withParentheses = false) {
        let displayStr: string;
        displayStr = integer + fraction;
        switch (this.symbolPosition) {
            case CURRENCY_SYMBOL_POSITION.LEFT:
                displayStr = this.symbol + displayStr;
                break;
            case CURRENCY_SYMBOL_POSITION.RIGHT:
                displayStr = displayStr + this.symbol;
                break;
            case CURRENCY_SYMBOL_POSITION.NONE:
            default:
                // Do Nothing
                break;
        }
        return withParentheses ? `(${displayStr})` : displayStr;
    }
}
