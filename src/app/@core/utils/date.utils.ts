import { CURRENT_YEAR, DATE_CONSTANT } from '../constant/common';

export const isDate = (date: Date | string) => {
    if (date instanceof Date) {
        return !!date.getDate();
    }
    return !isNaN(Date.parse(date));
};

export const getAge = (date: Date) => {
    if (!isDate(date)) {
        return 0;
    }
    return CURRENT_YEAR - date.getFullYear();
};

export const parseDate = (dateStr: string, format: DATE_CONSTANT = DATE_CONSTANT.ORIGINAL_DATE_FORMAT): Date => {
    let dateParts = [];
    switch (format) {
        case DATE_CONSTANT.TECHNICAL_DATE_FORMAT:
            dateParts = dateStr.split('-');
            return (dateParts.length === 3) ? new Date(+dateParts[0], +dateParts[1] - 1, +dateParts[2]) : null;
        case DATE_CONSTANT.ORIGINAL_DATE_FORMAT:
        default:
            dateParts = dateStr.split('-');
            return (dateParts.length === 3) ? new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]) : null;
    }
};
