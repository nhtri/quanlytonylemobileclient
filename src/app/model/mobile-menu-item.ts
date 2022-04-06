import { NbMenuItem } from '@nebular/theme';
import { USER_ROLE } from '../@core/constant/common';

export interface MobileMenuItem extends NbMenuItem {
    roles?: USER_ROLE[];
}
