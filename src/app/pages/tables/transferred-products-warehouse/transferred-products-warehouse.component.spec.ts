import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferredProductsWarehouseComponent } from './transferred-products-jp.component';

describe('TransferredProductsJpComponent', () => {
  let component: TransferredProductsWarehouseComponent;
  let fixture: ComponentFixture<TransferredProductsWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferredProductsWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferredProductsWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
