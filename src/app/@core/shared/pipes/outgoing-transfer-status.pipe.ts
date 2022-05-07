import { Pipe, PipeTransform } from '@angular/core';
import { NA, PRODUCT_STATUS, PRODUCT_STATUSES, TRANSFER_STATUS, TRANSFER_STATUSES } from '../../constant/common';
import { notEmpty } from '../../utils/data.utils';

@Pipe({
    name: 'outgoingTransferStatus',
})
export class OutgoingTransferStatusPipe implements PipeTransform {

    transform(value: string, ...args: any[]): string {
        const status = TRANSFER_STATUSES.find((x: { value: TRANSFER_STATUS }) => x.value === value.trim());
        if (notEmpty(status)) {
            return status.label;
        }
        return NA;
    }

}
