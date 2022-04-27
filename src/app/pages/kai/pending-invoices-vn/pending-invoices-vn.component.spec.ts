import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInvoicesVnComponent } from './pending-invoices.component';

describe('PendingInvoicesComponent', () => {
  let component: PendingInvoicesVnComponent;
  let fixture: ComponentFixture<PendingInvoicesVnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingInvoicesVnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInvoicesVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
