import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInvoicesWarehouseComponent } from './pending-invoices.component';

describe('PendingInvoicesComponent', () => {
  let component: PendingInvoicesWarehouseComponent;
  let fixture: ComponentFixture<PendingInvoicesWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingInvoicesWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInvoicesWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
