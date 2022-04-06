import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Sản Phẩm',
    icon: 'shopping-cart-outline',
    link: '/pages/tables/smart-table-san-pham',
    home: true,
    
  },

  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  {
    title: 'Quản Lý',
    group: true,
    hidden: localStorage.getItem('role') != 'admin'
  },

  
  {
    title: 'Quản Lý Khách Hàng',
    icon: 'grid-outline',
    hidden: localStorage.getItem('role') != 'admin',
    children: [
      // {
      //   title: 'Smart Table',
      //   link: '/pages/tables/smart-table',
      // },
      {
        title: 'Danh Sách Khách Hàng',
        link: '/pages/tables/smart-table-nguoidung',
      },


    ],
  },
  {
    title: 'Quản Lý Đơn Hàng',
    icon: 'grid-outline',
    hidden: localStorage.getItem('role') != 'admin',
    children: [
      // {
      //   title: 'Smart Table',
      //   link: '/pages/tables/smart-table',
      // },
      {
        title: 'Danh Sách Đơn Hàng Mới',
        link: '/pages/tables/smart-table-danh-sach-don-hang-moi',
      },
      {
        title: 'Đơn Hàng Đã Hoàn Thành',
        link: '/pages/tables/smart-table-don-hang',
      },

    ],
  },
  {
    title: 'Quản Lý Cấu Hình Máy',
    icon: 'grid-outline',
    hidden: localStorage.getItem('role') != 'admin',
    children: [
      // {
      //   title: 'Smart Table',
      //   link: '/pages/tables/smart-table',
      // },
      {
        title: 'Quản Lý Loại Máy',
        link: '/pages/tables/smart-table-loai-may',
      },
      {
        title: 'Quản Lý Đời Máy',
        link: '/pages/tables/smart-table-doi-may',
      },
      {
        title: 'Quản Lý Màn Hình',
        link: '/pages/tables/smart-table-man-hinh',
      },
      {
        title: 'Quản Lý Chip',
        link: '/pages/tables/smart-table-chip',
      },
      {
        title: 'Quản Lý Ram',
        link: '/pages/tables/smart-table-ram',
      },
      {
        title: 'Quản Lý Ổ Cứng',
        link: '/pages/tables/smart-table-o-cung',
      },
      {
        title: 'Quản Lý Nhóm Sản Phẩm',
        link: '/pages/tables/nhomsanpham',
      },
      {
        title: 'Quản Lý Tên Sản Phẩm',
        link: '/pages/tables/tensanpham',
      },
      // {
      //   title: 'Tree Grid',
      //   link: '/pages/tables/tree-grid',
      // },
    ],
  },
  {
    title: 'Quản Lý Máy',
    icon: 'grid-outline',
    hidden: localStorage.getItem('role') != 'admin',
    children: [
      // {
      //   title: 'Smart Table',
      //   link: '/pages/tables/smart-table',
      // },
      {
        title: 'Quản Lý Máy',
        link: '/pages/tables/smart-table-may',
      },


    ],
  },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Đăng Nhập',
    icon: 'lock-outline',
    hidden: localStorage.getItem('role') != null,
    children: [
      {
        title: 'Đăng Nhập',
        link: '/pages/tables/login',
      },
      // {
      //   title: 'Register',
      //   link: '/auth/register',
      // },
      // {
      //   title: 'Request Password',
      //   link: '/auth/request-password',
      // },
      {
        title: 'Đổi Mật Khẩu',
        link: '/pages/tables/changepass',
        hidden: localStorage.getItem('role') != null
      },
    ],
  },
  {
    title: 'Đăng Xuất',
    icon: 'lock-outline',
    link: '/pages/tables/logout',
    hidden: localStorage.getItem('role') == null,
  },
];
