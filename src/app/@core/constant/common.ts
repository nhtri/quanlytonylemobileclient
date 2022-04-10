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

export const TODAY = new Date();

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

export const enum PRODUCT_COLOR {
    BLACK = 'BLACK',
    GRAY = 'GRAY',
    WHITE = 'WHITE',
    RED = 'RED',
    GREEN = 'GREEN',
    BLUE = 'BLUE',
    PINK = 'PINK',
    SILVER_BLACK = 'SILVER_BLACK',
}

export const PRODUCT_COLORS = [
    {label: 'Black', code: '#000000', value: PRODUCT_COLOR.BLACK},
    {label: 'Gray', code: '#808080', value: PRODUCT_COLOR.GRAY},
    {label: 'White', code: '#FFFFFF', value: PRODUCT_COLOR.WHITE},
    {label: 'Red', code: '#FF0000' , value: PRODUCT_COLOR.RED},
    {label: 'Green', code: '#00FF00', value: PRODUCT_COLOR.GREEN},
    {label: 'Blue', code: '#0000FF', value: PRODUCT_COLOR.BLUE},
    {label: 'Pink', code: '#FFC0CB', value: PRODUCT_COLOR.PINK},
    {label: 'Silver Black', code: '#C0C0C0,#000000', value: PRODUCT_COLOR.SILVER_BLACK},
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

export const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

export const EXCEL_EXTENSION = '.xlsx';
