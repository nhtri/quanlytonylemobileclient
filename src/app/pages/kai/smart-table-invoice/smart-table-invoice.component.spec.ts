import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableInvoiceComponent } from './smart-table-invoice.component';

describe('SmartTableInvoiceComponent', () => {
  let component: SmartTableInvoiceComponent;
  let fixture: ComponentFixture<SmartTableInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
