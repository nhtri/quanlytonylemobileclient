import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDonHangDaXuLyThanhCongComponent } from './smart-table-don-hang-da-xu-ly-thanh-cong.component';

describe('SmartTableDonHangDaXuLyThanhCongComponent', () => {
  let component: SmartTableDonHangDaXuLyThanhCongComponent;
  let fixture: ComponentFixture<SmartTableDonHangDaXuLyThanhCongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDonHangDaXuLyThanhCongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDonHangDaXuLyThanhCongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
