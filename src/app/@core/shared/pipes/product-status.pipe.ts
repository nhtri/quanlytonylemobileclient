import { Pipe, PipeTransform } from '@angular/core';
import { NA, PRODUCT_STATUS, PRODUCT_STATUSES } from '../../constant/common';
import { notEmpty } from '../../utils/data.utils';

@Pipe({
    name: 'productStatus',
})
export class ProductStatusPipe implements PipeTransform {

    transform(value: string, ...args: any[]): string {
        const status = PRODUCT_STATUSES.find((x: { value: PRODUCT_STATUS }) => x.value === value.trim());
        if (notEmpty(status)) {
            return status.label;
        }
        return NA;
    }

}
