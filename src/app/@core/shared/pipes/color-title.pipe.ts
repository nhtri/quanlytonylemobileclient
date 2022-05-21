import { Pipe, PipeTransform } from '@angular/core';
import { NA, PRODUCT_COLOR, PRODUCT_COLORS } from '../../constant/common';
import { notEmpty } from '../../utils/data.utils';

@Pipe({
    name: 'colorTitle',
})
export class ColorTitlePipe implements PipeTransform {

    transform(value: string, ...args: any[]): string {
        const color = PRODUCT_COLORS.find((x: { value: PRODUCT_COLOR }) => x.value === value.trim());
        if (notEmpty(color)) {
            return color.label;
        }
        return value;
    }

}
