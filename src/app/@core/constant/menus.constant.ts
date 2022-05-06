import { MobileMenuItem } from '../../model/mobile-menu-item';
import { USER_ROLE } from './common';
import { KAI_PAGES, SHOP_JP_PAGES, SHOP_VN_PAGES, SHOP_WAREHOUSE_PAGES } from './pages.constant';

export const KAI_MENU_ITEMS: MobileMenuItem[] = [
    {
        title: 'Kai',
        icon: 'shopping-cart-outline',
        roles: [USER_ROLE.ADMIN, USER_ROLE.KAI],
        children: [
            {
                title: 'Quản Lý Người Bán',
                icon: 'people-outline',
                children: [
                    {
                        title: 'DS Người Bán',
                        link: KAI_PAGES.DATA_CUSTOMERS,
                    },
                ],
            },
            {
                title: 'Quản Lý Mua Hàng',
                children: [
                    {
                        title: 'Nhóm Sản Phẩm',
                    },
                    {
                        title: 'DS Máy Trong Kho',
                        link: KAI_PAGES.DATA_PRODUCTS,
                    },
                    {
                        title: 'Quản Lý Máy',
                        link: KAI_PAGES.DATA_DEVICES,
                    },
                    {
                        title: 'Quản Lý Đơn Thu Mua',
                        link: KAI_PAGES.DATA_PURCHASING_INVOICES,
                    },
                ],
            },
            {
                title: 'Quản Lý Đơn Hàng',
                children: [
                    {
                        title: 'DS ĐH Đang Xữ Lý',
                        link: KAI_PAGES.DATA_PENDING_ORDERS,
                    },
                    {
                        title: 'DS ĐH Hoàn Thành',
                        link: KAI_PAGES.DATA_COMPLETED_ORDERS,
                    },
                ],
            },
            {
                title: 'Quản Lý Thu Chi',
                link: KAI_PAGES.STATISTICS,
            },
            {
                title: 'Quản Lý Chuyển Kho',
                icon: 'car-outline',
                children: [
                    {
                        title: 'Chuyển Kho Đi',
                        icon: 'diagonal-arrow-right-up-outline',
                        children: [
                            {
                                title: 'DS Hàng Chuyển Đi',
                                icon: 'paper-plane-outline',
                                link: KAI_PAGES.DATA_OUTGOING_TRANSFER_PRODUCTS,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export const MENU_ITEMS: MobileMenuItem[] = [
    {
        title: 'Cửa hàng Nhật',
        // group: true,
        icon: 'shopping-cart-outline',
        // },
        // {
        children: [{
            title: 'Quản Lý Mua Hàng',
            icon: 'shopping-cart-outline',
            // link: '/pages/tables/danhsachsanphamjp',
            // home: true,
            children: [
                {
                    title: 'Sản Phẩm',
                    link: '/pages/tables/danhsachsanphamjp',
                },
                {
                    title: 'Sản Phẩm Đã Bán',
                    link: '/pages/tables/quanlydanhsachsanphamdabanjp',
                },
                {
                    title: 'Danh Sách Đơn Hàng',
                    link: '/pages/tables/quanlydanhsachdonhangjp',
                },

            ],
        },
            {
                title: 'Quản Lý Thu Chi',
                icon: 'grid-outline',
                // roles: [USER_ROLE.ADMIN],
                // hidden: localStorage.getItem('role') != 'admin',
                children: [
                    {
                        title: 'Quản Lý Thu',
                        link: '/pages/tables/quanlythujp',
                    },
                    {
                        title: 'Quản Lý Chi',
                        link: '/pages/tables/quanlychijp',
                    },
                    {
                        title: 'Quản Lý Tiền Mặt',
                        link: '/pages/tables/quanlythuchijp',
                    },
                ],
            },
            // {
            //     title: 'Thống Kê & Báo Cáo',
            //     icon: 'pie-chart-outline',
            //     children: [
            //         // {
            //         //     title: 'Echarts (Tham khảo lựa mẫu)',
            //         //     link: '/pages/charts/echarts',
            //         // },
            //         // {
            //         //     title: 'Charts.js (Tham khảo lựa mẫu)',
            //         //     link: '/pages/charts/chartjs',
            //         // },
            //         {
            //             title: 'Thống Kê Bán Hàng',
            //             link: '/pages/charts/d3',
            //         },
            //         {
            //             title: 'Thống Kê Lợi Nhuận',
            //             link: '/pages/tables/thongke',
            //         },
            //         {
            //             title: 'Báo Cáo Thuế',
            //             link: '/pages/tables/baocaothue',
            //         },
            //     ],
            // },
            {
                title: 'Quản Lý Cấu Hình Máy',
                icon: 'grid-outline',
                // roles: [USER_ROLE.ADMIN],
                // hidden: localStorage.getItem('role') != 'admin',
                children: [
                    {
                        title: 'Quản Lý Nhóm Sản Phẩm',
                        link: '/pages/tables/nhomsanphamjp',
                    },
                    // {
                    //     title: 'Quản Lý Tên Sản Phẩm',
                    //     link: '/pages/tables/tensanpham',
                    // },
                    // {
                    //     title: 'Quản Lý Dung Lượng',
                    //     link: '/pages/tables/dungluong',
                    // },
                    // {
                    //     title: 'Quản Lý Loại Sản Phẩm',
                    //     link: '/pages/tables/loaisanpham',
                    // },
                    // {
                    //     title: 'Quản Lý Màu Sắc',
                    //     link: '/pages/tables/mau',
                    // },
                    // {
                    //     title: 'Quản Lý Phiên Bản',
                    //     link: '/pages/tables/phienban',
                    // },
                    {
                        title: 'Quản Lý Danh Sách Sản Phẩm',
                        link: '/pages/tables/quanlydanhsachsanphamjp',
                    },
                ],
            },
            {
                title: 'Quản Lý Đơn Hàng',
                icon: 'grid-outline',
                children: [
                    {
                        title: 'DS ĐH Đang Xữ Lý',
                        link: KAI_PAGES.DATA_PENDING_ORDERS_JP,
                    },
                    {
                        title: 'DS ĐH Hoàn Thành',
                        link: KAI_PAGES.DATA_COMPLETED_ORDERS_JP,
                    },
                ],
            },
            {
                title: 'Quản Lý Chuyển Kho',
                icon: 'car-outline',
                children: [
                    {
                        title: 'Chuyển Kho Đi',
                        icon: 'diagonal-arrow-right-up-outline',
                        children: [
                            {
                                title: 'DS Hàng Chuyển Đi',
                                icon: 'paper-plane-outline',
                                link: SHOP_JP_PAGES.DATA_OUTGOING_TRANSFER_PRODUCTS,
                            },
                        ],
                    },
                    {
                        title: 'Chuyển Kho Đến',
                        icon: 'diagonal-arrow-left-down-outline',
                        children: [
                            {
                                title: 'SP Đang Đến',
                                icon: 'collapse-outline',
                                link: SHOP_JP_PAGES.DATA_TRANSFERRING_PRODUCTS,
                            },
                            {
                                title: 'SP Đã Đến',
                                icon: 'done-all-outline',
                                link: SHOP_JP_PAGES.DATA_TRANSFERRED_PRODUCTS,
                            },
                            {
                                title: 'SP Thất Lạc',
                                icon: 'eye-off-outline',
                                link: SHOP_JP_PAGES.DATA_NOT_FOUND_PRODUCTS,
                            },
                        ],
                    },
                ],
            },
        ],
    }];

export const MENU_ITEMS_VN: MobileMenuItem[] = [
    {
        title: 'Cửa hàng Việt Nam',
        // group: true,
        icon: 'shopping-cart-outline',
        // },
        // {
        children: [{
            title: 'Quản Lý Mua Hàng',
            icon: 'shopping-cart-outline',
            // link: '/pages/tables/danhsachsanphamvn',
            // home: true,
            children: [
                {
                    title: 'Sản Phẩm',
                    link: '/pages/tables/danhsachsanphamvn',
                },
                {
                    title: 'Sản Phẩm Đã Bán',
                    link: '/pages/tables/quanlydanhsachsanphamdabanvn',
                },
                {
                    title: 'Danh Sách Đơn Hàng',
                    link: '/pages/tables/quanlydanhsachdonhangvn',
                },

            ],
        },
            {
                title: 'Quản Lý Thu Chi',
                icon: 'grid-outline',
                // roles: [USER_ROLE.ADMIN],
                // hidden: localStorage.getItem('role') != 'admin',
                children: [
                    {
                        title: 'Quản Lý Thu',
                        link: '/pages/tables/quanlythuvn',
                    },
                    {
                        title: 'Quản Lý Chi',
                        link: '/pages/tables/quanlychivn',
                    },
                    {
                        title: 'Quản Lý Tiền Mặt',
                        link: '/pages/tables/quanlythuchivn',
                    },
                ],
            },
            // {
            //     title: 'Thống Kê & Báo Cáo',
            //     icon: 'pie-chart-outline',
            //     children: [
            //         // {
            //         //     title: 'Echarts (Tham khảo lựa mẫu)',
            //         //     link: '/pages/charts/echarts',
            //         // },
            //         // {
            //         //     title: 'Charts.js (Tham khảo lựa mẫu)',
            //         //     link: '/pages/charts/chartjs',
            //         // },
            //         {
            //             title: 'Thống Kê Bán Hàng',
            //             link: '/pages/charts/d3',
            //         },
            //         {
            //             title: 'Thống Kê Lợi Nhuận',
            //             link: '/pages/tables/thongke',
            //         },
            //         {
            //             title: 'Báo Cáo Thuế',
            //             link: '/pages/tables/baocaothue',
            //         },
            //     ],
            // },
            {
                title: 'Quản Lý Cấu Hình Máy',
                icon: 'grid-outline',
                // roles: [USER_ROLE.ADMIN],
                // hidden: localStorage.getItem('role') != 'admin',
                children: [
                    {
                        title: 'Quản Lý Nhóm Sản Phẩm',
                        link: '/pages/tables/nhomsanphamvn',
                    },
                    // {
                    //     title: 'Quản Lý Tên Sản Phẩm',
                    //     link: '/pages/tables/tensanpham',
                    // },
                    // {
                    //     title: 'Quản Lý Dung Lượng',
                    //     link: '/pages/tables/dungluong',
                    // },
                    // {
                    //     title: 'Quản Lý Loại Sản Phẩm',
                    //     link: '/pages/tables/loaisanpham',
                    // },
                    // {
                    //     title: 'Quản Lý Màu Sắc',
                    //     link: '/pages/tables/mau',
                    // },
                    // {
                    //     title: 'Quản Lý Phiên Bản',
                    //     link: '/pages/tables/phienban',
                    // },
                    {
                        title: 'Quản Lý Danh Sách Sản Phẩm',
                        link: '/pages/tables/quanlydanhsachsanphamvn',
                    },
                ],
            },
            {
                title: 'Quản Lý Đơn Hàng',
                icon: 'grid-outline',
                children: [
                    {
                        title: 'DS ĐH Đang Xữ Lý',
                        link: KAI_PAGES.DATA_PENDING_ORDERS_VN,
                    },
                    {
                        title: 'DS ĐH Hoàn Thành',
                        link: KAI_PAGES.DATA_COMPLETED_ORDERS_VN,
                    },
                ],
            },
            {
                title: 'Quản Lý Chuyển Kho',
                icon: 'car-outline',
                children: [
                    {
                        title: 'Chuyển Kho Đi',
                        icon: 'diagonal-arrow-right-up-outline',
                        children: [
                            {
                                title: 'DS Hàng Chuyển Đi',
                                icon: 'paper-plane-outline',
                                link: SHOP_VN_PAGES.DATA_OUTGOING_TRANSFER_PRODUCTS,
                            },
                        ],
                    },
                    {
                        title: 'Chuyển Kho Đến',
                        icon: 'diagonal-arrow-left-down-outline',
                        children: [
                            {
                                title: 'SP Đang Đến',
                                icon: 'collapse-outline',
                                link: SHOP_VN_PAGES.DATA_TRANSFERRING_PRODUCTS,
                            },
                            {
                                title: 'SP Đã Đến',
                                icon: 'done-all-outline',
                                link: SHOP_VN_PAGES.DATA_TRANSFERRED_PRODUCTS,
                            },
                            {
                                title: 'SP Thất Lạc',
                                icon: 'eye-off-outline',
                                link: SHOP_VN_PAGES.DATA_NOT_FOUND_PRODUCTS,
                            },
                        ],
                    },
                ],
            },
        ],
    }];

export const MENU_ITEMS_KHO: MobileMenuItem[] = [
    {
        title: 'Kho Hàng',
        icon: 'shopping-cart-outline',
        // group: true,
        // },
        // {
        children: [{
            title: 'Quản Lý Mua Hàng',
            icon: 'shopping-cart-outline',
            // link: '/pages/tables/danhsachsanpham',
            // home: true,
            children: [
                {
                    title: 'Sản Phẩm',
                    link: '/pages/tables/danhsachsanpham',
                },
                {
                    title: 'Sản Phẩm Đã Bán',
                    link: '/pages/tables/quanlydanhsachsanphamdaban',
                },
                {
                    title: 'Danh Sách Đơn Hàng',
                    link: '/pages/tables/quanlydanhsachdonhang',
                },

            ],
        },
            {
                title: 'Quản Lý Thu Chi',
                icon: 'grid-outline',
                // roles: [USER_ROLE.ADMIN],
                // hidden: localStorage.getItem('role') != 'admin',
                children: [
                    {
                        title: 'Quản Lý Thu',
                        link: '/pages/tables/quanlythu',
                    },
                    {
                        title: 'Quản Lý Chi',
                        link: '/pages/tables/quanlychi',
                    },
                    {
                        title: 'Quản Lý Tiền Mặt',
                        link: '/pages/tables/quanlythuchi',
                    },
                ],
            },
            // {
            // title: 'Thống Kê & Báo Cáo',
            // icon: 'pie-chart-outline',
            // children: [
            // {
            //     title: 'Echarts (Tham khảo lựa mẫu)',
            //     link: '/pages/charts/echarts',
            // },
            // {
            //     title: 'Charts.js (Tham khảo lựa mẫu)',
            //     link: '/pages/charts/chartjs',
            // },
            // {
            //     title: 'Thống Kê Bán Hàng',
            //     link: '/pages/charts/d3',
            // },
            // {
            //     title: 'Thống Kê Lợi Nhuận',
            //     link: '/pages/tables/thongke',
            // },
            // {
            //     title: 'Báo Cáo Thuế',
            //     link: '/pages/tables/baocaothue',
            // },
            // ],
            // },
            {
                title: 'Quản Lý Cấu Hình Máy',
                icon: 'grid-outline',
                // roles: [USER_ROLE.ADMIN],
                // hidden: localStorage.getItem('role') != 'admin',
                children: [
                    {
                        title: 'Quản Lý Nhóm Sản Phẩm',
                        link: '/pages/tables/nhomsanpham',
                    },
                    {
                        title: 'Quản Lý Danh Sách Sản Phẩm',
                        link: '/pages/tables/quanlydanhsachsanpham',
                    },
                ],
            },
            {
                title: 'Quản Lý Đơn Hàng',
                icon: 'grid-outline',
                children: [
                    {
                        title: 'DS ĐH Đang Xữ Lý',
                        link: KAI_PAGES.DATA_PENDING_ORDERS_WAREHOUSE,
                    },
                    {
                        title: 'DS ĐH Hoàn Thành',
                        link: KAI_PAGES.DATA_COMPLETED_ORDERS_WAREHOUSE,
                    },
                ],
            },
            {
                title: 'Quản Lý Chuyển Kho',
                icon: 'car-outline',
                children: [
                    {
                        title: 'Chuyển Kho Đi',
                        icon: 'diagonal-arrow-right-up-outline',
                        children: [
                            {
                                title: 'DS Hàng Chuyển Đi',
                                icon: 'paper-plane-outline',
                                link: SHOP_WAREHOUSE_PAGES.DATA_OUTGOING_TRANSFER_PRODUCTS,
                            },
                        ],
                    },
                    {
                        title: 'Chuyển Kho Đến',
                        icon: 'diagonal-arrow-left-down-outline',
                        children: [
                            {
                                title: 'SP Đang Đến',
                                icon: 'collapse-outline',
                                link: SHOP_WAREHOUSE_PAGES.DATA_TRANSFERRING_PRODUCTS,
                            },
                            {
                                title: 'SP Đã Đến',
                                icon: 'done-all-outline',
                                link: SHOP_WAREHOUSE_PAGES.DATA_TRANSFERRED_PRODUCTS,
                            },
                            {
                                title: 'SP Thất Lạc',
                                icon: 'eye-off-outline',
                                link: SHOP_WAREHOUSE_PAGES.DATA_NOT_FOUND_PRODUCTS,
                            },
                        ],
                    },
                ],
            },
        ],
    }];

export const ADMIN_MENU_ITEMS: MobileMenuItem[] = [
    {
        title: 'Admin',
        group: true,
        roles: [USER_ROLE.ADMIN],
    },
    {
        title: 'Tạo Tài Khoản',
        icon: 'lock-outline',
        link: '/pages/tables/smart-table-nguoidung',
        roles: [USER_ROLE.ADMIN],
        // hidden: localStorage.getItem('role') != null,

    },
    {
        title: 'Thống Kê & Báo Cáo',
        icon: 'pie-chart-outline',
        roles: [USER_ROLE.ADMIN],
        children: [
            {
                title: 'Thống Kê Bán Hàng',
                link: '/pages/charts/d3',
            },
            {
                title: 'Thống Kê Lợi Nhuận',
                link: '/pages/tables/thongke',
            },
            {
                title: 'Báo Cáo Thuế',
                link: '/pages/tables/baocaothue',
            },
        ],
    },
];

export const GENERAL_MENU_ITEMS: MobileMenuItem[] = [
    {
        'title': 'General',
        group: true,
    },
    {
        title: 'Đăng Nhập',
        icon: 'lock-outline',
        link: '/pages/tables/login',
        roles: [USER_ROLE.GUEST],
        // hidden: localStorage.getItem('role') != null,
    },
    {
        title: 'Đổi Mật Khẩu',
        icon: 'lock-outline',
        link: '/pages/tables/changepass',
        roles: null,
        // hidden: localStorage.getItem('role') != null,
    },
    {
        title: 'Đăng Xuất',
        icon: 'lock-outline',
        link: '/pages/tables/logout',
        roles: [USER_ROLE.ADMIN, USER_ROLE.KAI, USER_ROLE.WAREHOUSE, USER_ROLE.SHOP_VN, USER_ROLE.SHOP_JP],
        // hidden: localStorage.getItem('role') != null,
    },
];
