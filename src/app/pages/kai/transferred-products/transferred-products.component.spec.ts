import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferredProductsComponent } from './transferred-products.component';

describe('TransferredProductsComponent', () => {
  let component: TransferredProductsComponent;
  let fixture: ComponentFixture<TransferredProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferredProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
