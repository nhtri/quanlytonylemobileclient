import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { SmartTableLoaiMayComponent } from './smart-table-loai-may/smart-table-loai-may.component';
import { SmartTableDoiMayComponent } from './smart-table-doi-may/smart-table-doi-may.component';
import { SmartTableChipComponent } from './smart-table-chip/smart-table-chip.component';
import { SmartTableManHinhComponent } from './smart-table-man-hinh/smart-table-man-hinh.component';
import { SmartTableRamComponent } from './smart-table-ram/smart-table-ram.component';
import { SmartTableOCungComponent } from './smart-table-o-cung/smart-table-o-cung.component';
import { SmartTableMayComponent } from './smart-table-may/smart-table-may.component';
import { SmartTableSanPhamComponent } from './smart-table-san-pham/smart-table-san-pham.component';
import { LoginComponent } from './login/login.component';
import { SmartTableNguoidungComponent } from './smart-table-nguoidung/smart-table-nguoidung.component';
import {
    SmartTableDanhSachDonHangMoiComponent,
} from './smart-table-danh-sach-don-hang-moi/smart-table-danh-sach-don-hang-moi.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangepassComponent } from './changepass/changepass.component';
import {
    SmartTableDonHangDangXuLyComponent,
} from './smart-table-don-hang-dang-xu-ly/smart-table-don-hang-dang-xu-ly.component';
import {
    SmartTableDonHangDaXuLyThanhCongComponent,
} from './smart-table-don-hang-da-xu-ly-thanh-cong/smart-table-don-hang-da-xu-ly-thanh-cong.component';
import {
    SmartTableDonHangDangXuLyNguoiMuaComponent,
} from './smart-table-don-hang-dang-xu-ly-nguoi-mua/smart-table-don-hang-dang-xu-ly-nguoi-mua.component';
import {
    SmartTableDonHangDangXuLyAdminComponent,
} from './smart-table-don-hang-dang-xu-ly-admin/smart-table-don-hang-dang-xu-ly-admin.component';
import { SmartTableDetailComponent } from './smart-table-detail/smart-table-detail.component';
import {
    SmartTableDetailNguoiDungComponent,
} from './smart-table-detail-nguoi-dung/smart-table-detail-nguoi-dung.component';
import {
    SmartTableDonHangCuDetailComponent,
} from './smart-table-don-hang-cu-detail/smart-table-don-hang-cu-detail.component';
import {
    SmartTableTaoDonHangChoDaiLyComponent,
} from './smart-table-tao-don-hang-cho-dai-ly/smart-table-tao-don-hang-cho-dai-ly.component';
import { SmartTableMayDaBanComponent } from './smart-table-may-da-ban/smart-table-may-da-ban.component';
import {
    SmartTableDaXuLyNguoiMuaComponent,
} from './smart-table-da-xu-ly-nguoi-mua/smart-table-da-xu-ly-nguoi-mua.component';
import { NhomsanphamComponent } from './nhomsanpham/nhomsanpham.component';
import { TensanphamComponent } from './tensanpham/tensanpham.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { DungluongComponent } from './dungluong/dungluong.component';
import { MauComponent } from './mau/mau.component';
import { PhienbanComponent } from './phienban/phienban.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { EditdanhsachsanphamComponent } from './editdanhsachsanpham/editdanhsachsanpham.component';
import { BansanphamComponent } from './bansanpham/bansanpham.component';
import { QuanlydanhsachsanphamComponent } from './quanlydanhsachsanpham/quanlydanhsachsanpham.component';
import { QuanlydanhsachsanphamdabanComponent } from './quanlydanhsachsanphamdaban/quanlydanhsachsanphamdaban.component';
import { QuanlydanhsachdonhangComponent } from './quanlydanhsachdonhang/quanlydanhsachdonhang.component';
import { ChitietdonhangComponent } from './chitietdonhang/chitietdonhang.component';
import { QuanlychiComponent } from './quanlychi/quanlychi.component';
import { QuanlythuComponent } from './quanlythu/quanlythu.component';
import { QuanlythuchiComponent } from './quanlythuchi/quanlythuchi.component';
import { BaocaothueComponent } from './baocaothue/baocaothue.component';
import { DanhsachsanphamnhatComponent } from './danhsachsanphamnhat/danhsachsanphamnhat.component';
import { DanhsachsanphamvnComponent } from './danhsachsanphamvn/danhsachsanphamvn.component';
import { QuanlydanhsachsanphamnhatComponent } from './quanlydanhsachsanphamnhat/quanlydanhsachsanphamnhat.component';
import { QuanlydanhsachsanphamvnComponent } from './quanlydanhsachsanphamvn/quanlydanhsachsanphamvn.component';
import { QuanlydanhsachdonhangvnComponent } from './quanlydanhsachdonhangvn/quanlydanhsachdonhangvn.component';
import { QuanlydanhsachdonhangnhatComponent } from './quanlydanhsachdonhangnhat/quanlydanhsachdonhangnhat.component';
import { ThongkeComponent } from './thongke/thongke.component';
import {
    QuanlydanhsachsanphamdabannhatComponent,
} from './quanlydanhsachsanphamdabannhat/quanlydanhsachsanphamdabannhat.component';
import {
    QuanlydanhsachsanphamdabanvnComponent,
} from './quanlydanhsachsanphamdabanvn/quanlydanhsachsanphamdabanvn.component';
import { QuanlythuchinhatComponent } from './quanlythuchinhat/quanlythuchinhat.component';
import { QuanlythuchivnComponent } from './quanlythuchivn/quanlythuchivn.component';
import { QuanlychivnComponent } from './quanlychivn/quanlychivn.component';
import { QuanlychinhatComponent } from './quanlychinhat/quanlychinhat.component';
import { QuanlythunhatComponent } from './quanlythunhat/quanlythunhat.component';
import { QuanlythuvnComponent } from './quanlythuvn/quanlythuvn.component';
import { NhomsanphamvnComponent } from './nhomsanphamvn/nhomsanphamvn.component';
import { NhomsanphamnhatComponent } from './nhomsanphamnhat/nhomsanphamnhat.component';
import {
    OutgoingTransferProductsJpComponent,
} from './outgoing-transfer-products-jp/outgoing-transfer-products-jp.component';
import { TransferringProductsJpComponent } from './transferring-products-jp/transferring-products-jp.component';
import { TransferredProductsJpComponent } from './transferred-products-jp/transferred-products-jp.component';
import { NotFoundProductsJpComponent } from './not-found-products-jp/not-found-products-jp.component';
import {
    OutgoingTransferProductsVnComponent,
} from './outgoing-transfer-products-vn/outgoing-transfer-products-vn.component';
import { TransferringProductsVnComponent } from './transferring-products-vn/transferring-products-vn.component';
import { TransferredProductsVnComponent } from './transferred-products-vn/transferred-products-vn.component';
import { NotFoundProductsVnComponent } from './not-found-products-vn/not-found-products-vn.component';
import {
    OutgoingTransferProductsWarehouseComponent,
} from './outgoing-transfer-products-warehouse/outgoing-transfer-products-warehouse.component';
import {
    TransferringProductsWarehouseComponent,
} from './transferring-products-warehouse/transferring-products-warehouse.component';
import {
    TransferredProductsWarehouseComponent,
} from './transferred-products-warehouse/transferred-products-warehouse.component';
import {
    NotFoundProductsWarehouseComponent,
} from './not-found-products-warehouse/not-found-products-warehouse.component';

const routes: Routes = [{
    path: '',
    component: TablesComponent,
    children: [
        {
            path: 'smart-table',
            component: SmartTableComponent,
        },
        {
            path: 'smart-table-loai-may',
            component: SmartTableLoaiMayComponent,
        },
        {
            path: 'smart-table-doi-may',
            component: SmartTableDoiMayComponent,
        },
        {
            path: 'smart-table-man-hinh',
            component: SmartTableManHinhComponent,
        },
        {
            path: 'smart-table-chip',
            component: SmartTableChipComponent,
        },
        {
            path: 'smart-table-ram',
            component: SmartTableRamComponent,
        },
        {
            path: 'nhomsanpham',
            component: NhomsanphamComponent,
        },
        {
            path: 'nhomsanphamvn',
            component: NhomsanphamvnComponent,
        },
        {
            path: 'nhomsanphamjp',
            component: NhomsanphamnhatComponent,
        },
        {
            path: 'quanlychi',
            component: QuanlychiComponent,
        },
        {
            path: 'quanlychivn',
            component: QuanlychivnComponent,
        },
        {
            path: 'quanlychijp',
            component: QuanlychinhatComponent,
        },
        {
            path: 'quanlythu',
            component: QuanlythuComponent,
        },
        {
            path: 'quanlythujp',
            component: QuanlythunhatComponent,
        },
        {
            path: 'quanlythuvn',
            component: QuanlythuvnComponent,
        },
        {
            path: 'quanlythuchi',
            component: QuanlythuchiComponent,
        },
        {
            path: 'quanlythuchijp',
            component: QuanlythuchinhatComponent,
        },
        {
            path: 'quanlythuchivn',
            component: QuanlythuchivnComponent,
        },
        {
            path: 'quanlydanhsachsanpham',
            component: QuanlydanhsachsanphamComponent,
        },
        {
            path: 'quanlydanhsachsanphamjp',
            component: QuanlydanhsachsanphamnhatComponent,
        },
        {
            path: 'quanlydanhsachsanphamvn',
            component: QuanlydanhsachsanphamvnComponent,
        },
        {
            path: 'quanlydanhsachsanphamdaban',
            component: QuanlydanhsachsanphamdabanComponent,
        },
        {
            path: 'quanlydanhsachsanphamdabanjp',
            component: QuanlydanhsachsanphamdabannhatComponent,
        },
        {
            path: 'quanlydanhsachsanphamdabanvn',
            component: QuanlydanhsachsanphamdabanvnComponent,
        },
        {
            path: 'quanlydanhsachdonhang',
            component: QuanlydanhsachdonhangComponent,
        },
        {
            path: 'quanlydanhsachdonhangvn',
            component: QuanlydanhsachdonhangvnComponent,
        },
        {
            path: 'quanlydanhsachdonhangjp',
            component: QuanlydanhsachdonhangnhatComponent,
        },
        {
            path: 'dungluong',
            component: DungluongComponent,
        },
        {
            path: 'sanpham',
            component: EditdanhsachsanphamComponent,
        },
        {
            path: 'bansanpham',
            component: BansanphamComponent,
        },
        {
            path: 'chitietdonhang',
            component: ChitietdonhangComponent,
        },
        {
            path: 'baocaothue',
            component: BaocaothueComponent,
        },
        {
            path: 'loaisanpham',
            component: LoaisanphamComponent,
        },
        {
            path: 'tensanpham',
            component: TensanphamComponent,
        },
        {
            path: 'mau',
            component: MauComponent,
        },
        {
            path: 'thongke',
            component: ThongkeComponent,
        },
        {
            path: 'phienban',
            component: PhienbanComponent,
        },
        {
            path: 'danhsachsanpham',
            component: DanhsachsanphamComponent,
        },
        {
            path: 'danhsachsanphamjp',
            component: DanhsachsanphamnhatComponent,
        },
        {
            path: 'danhsachsanphamvn',
            component: DanhsachsanphamvnComponent,
        },
        {
            path: 'smart-table-o-cung',
            component: SmartTableOCungComponent,
        },
        {
            path: 'smart-table-don-hang-dang-xu-ly',
            component: SmartTableDonHangDangXuLyComponent,
        },
        {
            path: 'smart-table-don-hang-dang-xu-ly-admin',
            component: SmartTableDonHangDangXuLyAdminComponent,
        },
        {
            path: 'smart-table-tao-don-hang-cho-dai-ly',
            component: SmartTableTaoDonHangChoDaiLyComponent,
        },
        {
            path: 'smart-table-detail',
            component: SmartTableDetailComponent,
        },
        {
            path: 'smart-table-don-hang-cu-detail',
            component: SmartTableDonHangCuDetailComponent,
        },
        {
            path: 'smart-table-detail-nguoi-dung',
            component: SmartTableDetailNguoiDungComponent,
        },
        {
            path: 'smart-table-don-hang-dang-xu-ly-nguoi-mua',
            component: SmartTableDonHangDangXuLyNguoiMuaComponent,
        },
        {
            path: 'smart-table-da-xu-ly-nguoi-mua',
            component: SmartTableDaXuLyNguoiMuaComponent,
        },
        {
            path: 'smart-table-don-hang-da-xu-ly-thanh-cong',
            component: SmartTableDonHangDaXuLyThanhCongComponent,
        },
        {
            path: 'smart-table-may',
            component: SmartTableMayComponent,
        },
        {
            path: 'smart-table-may-da-ban',
            component: SmartTableMayDaBanComponent,
        },
        {
            path: 'smart-table-san-pham',
            component: SmartTableSanPhamComponent,
        },
        {
            path: 'smart-table-danh-sach-don-hang-moi',
            component: SmartTableDanhSachDonHangMoiComponent,
        },
        {
            path: 'smart-table-nguoidung',
            component: SmartTableNguoidungComponent,
        },
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'changepass',
            component: ChangepassComponent,
        },
        {
            path: 'logout',
            component: LogoutComponent,
        },
        {
            path: 'tree-grid',
            component: TreeGridComponent,
        },
        {
            path: 'outgoing-transfer-jp/products',
            component: OutgoingTransferProductsJpComponent,
        },
        {
            path: 'transferring-jp/products',
            component: TransferringProductsJpComponent,
        },
        {
            path: 'transferred-jp/products',
            component: TransferredProductsJpComponent,
        },
        {
            path: 'not-found-jp/products',
            component: NotFoundProductsJpComponent,
        },
        {
            path: 'outgoing-transfer-vn/products',
            component: OutgoingTransferProductsVnComponent,
        },
        {
            path: 'transferring-vn/products',
            component: TransferringProductsVnComponent,
        },
        {
            path: 'transferred-vn/products',
            component: TransferredProductsVnComponent,
        },
        {
            path: 'not-found-vn/products',
            component: NotFoundProductsVnComponent,
        },
        {
            path: 'outgoing-transfer-warehouse/products',
            component: OutgoingTransferProductsWarehouseComponent,
        },
        {
            path: 'transferring-warehouse/products',
            component: TransferringProductsWarehouseComponent,
        },
        {
            path: 'transferred-warehouse/products',
            component: TransferredProductsWarehouseComponent,
        },
        {
            path: 'not-found-warehouse/products',
            component: NotFoundProductsWarehouseComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TablesRoutingModule {
}

export const routedComponents = [
    TablesComponent,
    SmartTableComponent,
    SmartTableLoaiMayComponent,
    SmartTableDoiMayComponent,
    SmartTableManHinhComponent,
    SmartTableRamComponent,
    SmartTableChipComponent,
    SmartTableOCungComponent,
    SmartTableSanPhamComponent,
    SmartTableDanhSachDonHangMoiComponent,
    TreeGridComponent,
];
