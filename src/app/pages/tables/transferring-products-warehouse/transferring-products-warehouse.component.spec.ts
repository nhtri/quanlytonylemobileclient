import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferringProductsWarehouseComponent } from './transferring-products-jp.component';

describe('TransferringProductsJpComponent', () => {
  let component: TransferringProductsWarehouseComponent;
  let fixture: ComponentFixture<TransferringProductsWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferringProductsWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferringProductsWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
