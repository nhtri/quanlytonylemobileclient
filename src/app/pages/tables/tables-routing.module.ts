import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { SmartTableDanhSachDonHangMoiComponent } from './smart-table-danh-sach-don-hang-moi/smart-table-danh-sach-don-hang-moi.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { SmartTableDonHangDangXuLyComponent } from './smart-table-don-hang-dang-xu-ly/smart-table-don-hang-dang-xu-ly.component';
import { SmartTableDonHangDaXuLyThanhCongComponent } from './smart-table-don-hang-da-xu-ly-thanh-cong/smart-table-don-hang-da-xu-ly-thanh-cong.component';
import { SmartTableDonHangDangXuLyNguoiMuaComponent } from './smart-table-don-hang-dang-xu-ly-nguoi-mua/smart-table-don-hang-dang-xu-ly-nguoi-mua.component';
import { SmartTableDonHangDangXuLyAdminComponent } from './smart-table-don-hang-dang-xu-ly-admin/smart-table-don-hang-dang-xu-ly-admin.component';
import { SmartTableDetailComponent } from './smart-table-detail/smart-table-detail.component';
import { SmartTableDetailNguoiDungComponent } from './smart-table-detail-nguoi-dung/smart-table-detail-nguoi-dung.component';
import { SmartTableDonHangCuDetailComponent } from './smart-table-don-hang-cu-detail/smart-table-don-hang-cu-detail.component';
import { SmartTableTaoDonHangChoDaiLyComponent } from './smart-table-tao-don-hang-cho-dai-ly/smart-table-tao-don-hang-cho-dai-ly.component';
import { SmartTableMayDaBanComponent } from './smart-table-may-da-ban/smart-table-may-da-ban.component';
import { SmartTableDaXuLyNguoiMuaComponent } from './smart-table-da-xu-ly-nguoi-mua/smart-table-da-xu-ly-nguoi-mua.component';
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
      path: 'quanlychi',
      component: QuanlychiComponent,
    },
    {
      path: 'quanlythu',
      component: QuanlythuComponent,
    },
    {
      path: 'quanlythuchi',
      component: QuanlythuchiComponent,
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
      path:'thongke',
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
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

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
