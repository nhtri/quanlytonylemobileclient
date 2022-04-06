import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDonHangCuDetailComponent } from './smart-table-don-hang-cu-detail.component';

describe('SmartTableDonHangCuDetailComponent', () => {
  let component: SmartTableDonHangCuDetailComponent;
  let fixture: ComponentFixture<SmartTableDonHangCuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDonHangCuDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDonHangCuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
