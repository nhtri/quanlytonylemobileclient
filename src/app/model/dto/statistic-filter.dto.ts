import { REPORT_TYPE } from '../../@core/constant/common';

export interface StatisticFilterDto {
    type: REPORT_TYPE;
    from_date: Date | string;
    to_date: Date | string;
}
