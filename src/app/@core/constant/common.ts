import { User } from '../../model/user';

// export const QUAN_LY_TONY_SERVICE = 'https://quanlytonylemobile.herokuapp.com';
export const QUAN_LY_TONY_SERVICE = 'http://localhost:3001';

export const enum SERVICE_RESOURCES {
    CUSTOMERS = 'customers',
    PRODUCTS = 'products',
    REPLICATE = 'replicate',
    INVOICES = 'invoices',
    PURCHASING_INVOICES = 'invoices/purchasing',
    FOR_SALE_INVOICES = 'invoices/for-sale',
    STATISTICS = 'statistics',
}

export const enum STRING_CONSTANT {
    EMPTY = '',
    SPACE = ' ',
    COMMA = ',',
    DOT = '.',
    UNDERSCORE = '_',
    COLON = ':',
    DASH = '-',
    PLUS = '+',
    QUESTION = '?',
}

export const enum DATE_CONSTANT {
    ORIGINAL_DATE_FORMAT = 'dd-MM-yyyy',
    TECHNICAL_DATE_FORMAT = 'yyyy-MM-dd',
}

export const NA = 'N/A';

export const CURRENT_YEAR = new Date().getFullYear();

export const DEFAULT_BIRTHDAY_YEAR_RANGE = `1800:${CURRENT_YEAR}`;

export const enum JOB_TYPE {
    STUDY_ABROAD = 'STUDY_ABROAD',
    OFFICE_WORKER = 'OFFICE_WORKER',
    SELF_EMPLOYED = 'SELF_EMPLOYED',
    PART_TIME_JOB = 'PART_TIME_JOB',
}

export const enum PRODUCT_STATUS {
    NEW = 'NEW',
    USED = 'USED',
}

export const PEOPLE_JOBS = [
    {label: '留学', value: JOB_TYPE.STUDY_ABROAD},
    {label: '会社員', value: JOB_TYPE.OFFICE_WORKER},
    {label: '自営業', value: JOB_TYPE.SELF_EMPLOYED},
    {label: 'アルバイト', value: JOB_TYPE.PART_TIME_JOB},
];

export const PRODUCT_STATUSES = [
    {label: '新品', value: PRODUCT_STATUS.NEW},
    {label: '中古', value: PRODUCT_STATUS.USED},
];

export const enum PRODUCT_SOURCE {
    KAI = 'KAI',
    SHOP_VN = 'SHOP_VN',
    SHOP_JP = 'SHOP_JP',
    WAREHOUSE = 'WAREHOUSE',
}

export const enum REPORT_TYPE {
    MONTH = 'MONTH',
    DATE_RANGE = 'DATE_RANGE',
}

export const STATISTICS_MONTH_LIMIT = 5;
export const STATISTICS_DATE_LIMIT = 5;

export const enum USER_ROLE {
    ADMIN = 'admin',
    EMPLOYEE = 'employee',
    GUEST = 'guest',
}

export const USERS: User[] = [
    {
        username: 'admin',
        password: '123456',
        role: USER_ROLE.ADMIN,
    },
    {
        username: 'employee',
        password: '123456',
        role: USER_ROLE.EMPLOYEE,
    },
];
