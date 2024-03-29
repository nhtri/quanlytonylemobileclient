import { User } from '../../model/user';

export const QUAN_LY_TONY_SERVICE = 'http://103.15.51.135:3001';
// export const QUAN_LY_TONY_SERVICE = 'http://localhost:3001';

export const enum MONEY_SYMBOL {
    VND = 'đ',
    JPY = '¥',
}

export const enum SERVICE_RESOURCES {
    CUSTOMERS = 'customers',
    PRODUCTS = 'products',
    REPLICATE = 'replicate',
    INVOICES = 'invoices',
    PURCHASING_INVOICES = 'invoices/purchasing',
    FOR_SALE_INVOICES = 'invoices/for-sale',
    TRANSFERRING_INVOICES = 'invoices/transferring',
    STATISTICS = 'statistics',
    TRANSFERRING = 'transferring',
    PRODUCT_GROUPS = 'product-groups',
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
    LIKE_NEW = 'LIKE_NEW',
    LIKE_NEW_TBH = 'LIKE_NEW_TBH',
    SECOND_HAND_A = 'SECOND_HAND_A',
    SECOND_HAND_B = 'SECOND_HAND_B',
    SECOND_HAND_C = 'SECOND_HAND_C',
    SECOND_HAND_D = 'SECOND_HAND_D',
}

export const enum TRANSFER_STATUS {
    NEW = 'NEW',
    PROCESSING = 'PROCESSING',
    TRANSFERRING = 'TRANSFERRING',
    TRANSFERRED = 'TRANSFERRED',
    NOT_FOUND = 'NOT_FOUND',
    CANCELED = 'CANCELED',
}


export const enum PAYMENT_TYPE {
    CASH = 'tienmat',
    TRANSFER = 'chuyenkhoan',
}

export const enum PAYMENT_METHOD {
    ORDINARY_DEPOSIT = 'ORDINARY_DEPOSIT',
    CHECKS_DEPOSIT = 'CHECKS_DEPOSIT',
}

export const PAYMENT_METHODS = [
    {label: '普通預金', value: PAYMENT_METHOD.ORDINARY_DEPOSIT},
    {label: '当座預金', value: PAYMENT_METHOD.CHECKS_DEPOSIT},
];

export const TRANSFER_STATUSES = [
    {label: 'Mới', value: TRANSFER_STATUS.NEW},
    {label: 'Đang Xữ Lý', value: TRANSFER_STATUS.PROCESSING},
    {label: 'Đang Chuyển', value: TRANSFER_STATUS.TRANSFERRING},
    {label: 'Thất Lạc', value: TRANSFER_STATUS.NOT_FOUND},
    {label: 'Đã Chuyển', value: TRANSFER_STATUS.TRANSFERRED},
    {label: 'Đã Hủy', value: TRANSFER_STATUS.TRANSFERRED},
];

export const PAYMENT_TYPES = [
    {label: 'Tiền Mặt', value: PAYMENT_TYPE.CASH},
    {label: 'Chuyển Khoản', value: PAYMENT_TYPE.TRANSFER},
];

export const enum INVOICE_TYPE {
    PURCHASING = 'PURCHASING',
    FOR_SALE = 'FOR_SALE',
    TRANSFERRING = 'TRANSFERRING',
}

export const PEOPLE_JOBS = [
    {label: '留学', value: JOB_TYPE.STUDY_ABROAD},
    {label: '会社員', value: JOB_TYPE.OFFICE_WORKER},
    {label: '自営業', value: JOB_TYPE.SELF_EMPLOYED},
    {label: 'アルバイト', value: JOB_TYPE.PART_TIME_JOB},
];

export const PRODUCT_STATUSES = [
    {label: 'New', value: PRODUCT_STATUS.NEW},
    {label: 'Like New', value: PRODUCT_STATUS.LIKE_NEW},
    {label: 'Like New TBH', value: PRODUCT_STATUS.LIKE_NEW_TBH},
    {label: 'Second-A', value: PRODUCT_STATUS.SECOND_HAND_A},
    {label: 'Second-B', value: PRODUCT_STATUS.SECOND_HAND_B},
    {label: 'Second-C', value: PRODUCT_STATUS.SECOND_HAND_C},
    {label: 'Second-D', value: PRODUCT_STATUS.SECOND_HAND_D},
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
    GOLD = 'GOLD',
    PURPLE = 'PURPLE',
}

export const PRODUCT_COLORS = [
    {label: 'Black', code: '#000000', value: PRODUCT_COLOR.BLACK},
    {label: 'Gray', code: '#808080', value: PRODUCT_COLOR.GRAY},
    {label: 'White', code: '#FFFFFF', value: PRODUCT_COLOR.WHITE},
    {label: 'Red', code: '#FF0000', value: PRODUCT_COLOR.RED},
    {label: 'Green', code: '#00FF00', value: PRODUCT_COLOR.GREEN},
    {label: 'Blue', code: '#0000FF', value: PRODUCT_COLOR.BLUE},
    {label: 'Pink', code: '#FFC0CB', value: PRODUCT_COLOR.PINK},
    {label: 'Silver Black', code: '#C0C0C0,#000000', value: PRODUCT_COLOR.SILVER_BLACK},
    {label: 'Gold', code: '#FFDF00', value: PRODUCT_COLOR.GOLD},
    {label: 'Purple', code: '#800080', value: PRODUCT_COLOR.PURPLE},
];

export const enum PRODUCT_SOURCE {
    KAI = 'KAI',
    SHOP_VN = 'SHOP_VN',
    SHOP_JP = 'SHOP_JP',
    WAREHOUSE = 'WAREHOUSE',
}

export const PRODUCT_STORAGES = [
    {label: 'KAI', value: PRODUCT_SOURCE.KAI},
    {label: 'Cửa Hàng Việt Nam', value: PRODUCT_SOURCE.SHOP_VN},
    {label: 'Cửa Hàng Nhật', value: PRODUCT_SOURCE.SHOP_JP},
    {label: 'Kho Hàng', value: PRODUCT_SOURCE.WAREHOUSE},
];

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
    KAI = 'kai',
    WAREHOUSE = 'khohang',
    SHOP_JP = 'cuahangnhat',
    SHOP_VN = 'cuahangvietnam',
    CONGTACVIEN = 'congtacvien',
    KHO = 'kho',
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
