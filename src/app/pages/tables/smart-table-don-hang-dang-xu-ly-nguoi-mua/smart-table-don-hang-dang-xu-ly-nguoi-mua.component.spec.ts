import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDonHangDangXuLyNguoiMuaComponent } from './smart-table-don-hang-dang-xu-ly-nguoi-mua.component';

describe('SmartTableDonHangDangXuLyNguoiMuaComponent', () => {
  let component: SmartTableDonHangDangXuLyNguoiMuaComponent;
  let fixture: ComponentFixture<SmartTableDonHangDangXuLyNguoiMuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDonHangDangXuLyNguoiMuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDonHangDangXuLyNguoiMuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
