import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedInvoicesJpComponent } from './completed-invoices.component';

describe('CompletedInvoicesComponent', () => {
  let component: CompletedInvoicesJpComponent;
  let fixture: ComponentFixture<CompletedInvoicesJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedInvoicesJpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedInvoicesJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
