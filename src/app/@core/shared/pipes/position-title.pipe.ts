import { Pipe, PipeTransform } from '@angular/core';
import { NA, PRODUCT_SOURCE, PRODUCT_STORAGES } from '../../constant/common';
import { notEmpty } from '../../utils/data.utils';

@Pipe({
    name: 'positionTitle',
})
export class PositionTitlePipe implements PipeTransform {

    transform(value: string, ...args: any[]): string {
        const position = PRODUCT_STORAGES.find((x: { value: PRODUCT_SOURCE }) => x.value === value.trim());
        if (notEmpty(position)) {
            return position.label;
        }
        return NA;
    }

}
