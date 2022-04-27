import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInvoicesJpComponent } from './pending-invoices.component';

describe('PendingInvoicesComponent', () => {
  let component: PendingInvoicesJpComponent;
  let fixture: ComponentFixture<PendingInvoicesJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingInvoicesJpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInvoicesJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
