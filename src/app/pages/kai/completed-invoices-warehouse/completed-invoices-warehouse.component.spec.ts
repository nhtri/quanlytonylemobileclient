import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedInvoicesWarehouseComponent } from './completed-invoices.component';

describe('CompletedInvoicesComponent', () => {
  let component: CompletedInvoicesWarehouseComponent;
  let fixture: ComponentFixture<CompletedInvoicesWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedInvoicesWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedInvoicesWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
