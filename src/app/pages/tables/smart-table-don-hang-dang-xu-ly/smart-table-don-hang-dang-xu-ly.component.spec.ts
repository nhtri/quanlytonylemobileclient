import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDonHangDangXuLyComponent } from './smart-table-don-hang-dang-xu-ly.component';

describe('SmartTableDonHangDangXuLyComponent', () => {
  let component: SmartTableDonHangDangXuLyComponent;
  let fixture: ComponentFixture<SmartTableDonHangDangXuLyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDonHangDangXuLyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDonHangDangXuLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
