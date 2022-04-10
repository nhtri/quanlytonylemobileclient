import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { SmartTableLoaiMayComponent } from './smart-table-loai-may/smart-table-loai-may.component';
import { SmartTableDoiMayComponent } from './smart-table-doi-may/smart-table-doi-may.component';
import { SmartTableManHinhComponent } from './smart-table-man-hinh/smart-table-man-hinh.component';
import { SmartTableChipComponent } from './smart-table-chip/smart-table-chip.component';
import { SmartTableRamComponent } from './smart-table-ram/smart-table-ram.component';
import { SmartTableOCungComponent } from './smart-table-o-cung/smart-table-o-cung.component';
import { SmartTableMayComponent } from './smart-table-may/smart-table-may.component';
import { SmartTableSanPhamComponent } from './smart-table-san-pham/smart-table-san-pham.component';
import { LoginComponent } from './login/login.component';
import { SmartTableNguoidungComponent } from './smart-table-nguoidung/smart-table-nguoidung.component';
import { SmartTableDanhSachDonHangMoiComponent } from './smart-table-danh-sach-don-hang-moi/smart-table-danh-sach-don-hang-moi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangepassComponent } from './changepass/changepass.component';
import { LogoutComponent } from './logout/logout.component';
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
import { DungluongComponent } from './dungluong/dungluong.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { MauComponent } from './mau/mau.component';
import { PhienbanComponent } from './phienban/phienban.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';

import { EditdanhsachsanphamComponent } from './editdanhsachsanpham/editdanhsachsanpham.component';
import { BansanphamComponent } from './bansanpham/bansanpham.component';
import { QuanlydanhsachsanphamComponent } from './quanlydanhsachsanpham/quanlydanhsachsanpham.component';
import { QuanlydanhsachsanphamdabanComponent } from './quanlydanhsachsanphamdaban/quanlydanhsachsanphamdaban.component';
import { QuanlydanhsachdonhangComponent } from './quanlydanhsachdonhang/quanlydanhsachdonhang.component';
import { ChitietdonhangComponent } from './chitietdonhang/chitietdonhang.component';
import { QuanlythuchiComponent } from './quanlythuchi/quanlythuchi.component';
import { QuanlythuComponent } from './quanlythu/quanlythu.component';
import { QuanlychiComponent } from './quanlychi/quanlychi.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatSelectModule} from '@angular/material/select';
import { D3AdvancedPieComponent } from '../charts/d3/d3-advanced-pie.component';
import { BaocaothueComponent } from './baocaothue/baocaothue.component';
import { DanhsachsanphamnhatComponent } from './danhsachsanphamnhat/danhsachsanphamnhat.component';
import { DanhsachsanphamvnComponent } from './danhsachsanphamvn/danhsachsanphamvn.component';
import { QuanlydanhsachsanphamnhatComponent } from './quanlydanhsachsanphamnhat/quanlydanhsachsanphamnhat.component';
import { QuanlydanhsachsanphamvnComponent } from './quanlydanhsachsanphamvn/quanlydanhsachsanphamvn.component';
@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    FormsModule, ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSelectModule
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    SmartTableLoaiMayComponent,
    SmartTableDoiMayComponent,
    SmartTableManHinhComponent,
    SmartTableChipComponent,
    SmartTableRamComponent,
    SmartTableOCungComponent,
    SmartTableMayComponent,
    SmartTableSanPhamComponent,
    LoginComponent,
    LogoutComponent,
    SmartTableNguoidungComponent,
    SmartTableDanhSachDonHangMoiComponent,
    ChangepassComponent,
    LogoutComponent,
    SmartTableDonHangDangXuLyComponent,
    SmartTableDonHangDaXuLyThanhCongComponent,
    SmartTableDonHangDangXuLyNguoiMuaComponent,
    SmartTableDonHangDangXuLyAdminComponent,
    SmartTableDetailComponent,
    SmartTableDetailNguoiDungComponent,
    SmartTableDonHangCuDetailComponent,
    SmartTableTaoDonHangChoDaiLyComponent,
    SmartTableMayDaBanComponent,
    SmartTableDaXuLyNguoiMuaComponent,
    NhomsanphamComponent,
    TensanphamComponent,
    DungluongComponent,
    LoaisanphamComponent,
    MauComponent,
    PhienbanComponent,
    DanhsachsanphamComponent,
 
    EditdanhsachsanphamComponent,
       BansanphamComponent,
       QuanlydanhsachsanphamComponent,
       QuanlydanhsachsanphamdabanComponent,
       QuanlydanhsachdonhangComponent,
       ChitietdonhangComponent,
       QuanlythuchiComponent,
       QuanlythuComponent,
       QuanlychiComponent,
       BaocaothueComponent,
       DanhsachsanphamnhatComponent,
       DanhsachsanphamvnComponent,
       QuanlydanhsachsanphamnhatComponent,
       QuanlydanhsachsanphamvnComponent,
  ],
})
export class TablesModule { }
