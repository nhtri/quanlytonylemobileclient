import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDonHangDangXuLyAdminComponent } from './smart-table-don-hang-dang-xu-ly-admin.component';

describe('SmartTableDonHangDangXuLyAdminComponent', () => {
  let component: SmartTableDonHangDangXuLyAdminComponent;
  let fixture: ComponentFixture<SmartTableDonHangDangXuLyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDonHangDangXuLyAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDonHangDangXuLyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
