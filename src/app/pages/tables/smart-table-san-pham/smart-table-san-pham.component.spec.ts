import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableSanPhamComponent } from './smart-table-san-pham.component';

describe('SmartTableSanPhamComponent', () => {
  let component: SmartTableSanPhamComponent;
  let fixture: ComponentFixture<SmartTableSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
