import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingInvoicesComponent } from './purchasing-invoices.component';

describe('PurchasingInvoicesComponent', () => {
  let component: PurchasingInvoicesComponent;
  let fixture: ComponentFixture<PurchasingInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasingInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
