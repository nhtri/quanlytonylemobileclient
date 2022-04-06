import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDanhSachDonHangMoiComponent } from './smart-table-danh-sach-don-hang-moi.component';

describe('SmartTableDanhSachDonHangMoiComponent', () => {
  let component: SmartTableDanhSachDonHangMoiComponent;
  let fixture: ComponentFixture<SmartTableDanhSachDonHangMoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDanhSachDonHangMoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDanhSachDonHangMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
