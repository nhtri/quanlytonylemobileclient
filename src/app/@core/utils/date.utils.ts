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
    let age = CURRENT_YEAR - date.getFullYear();
    const currentDate = new Date();
    if (
        (date.getMonth() < currentDate.getMonth())
        ||
        (date.getMonth() === currentDate.getMonth() && date.getDate() < currentDate.getDate())
    ) {
        age = age - 1;
    }

    return age;
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
