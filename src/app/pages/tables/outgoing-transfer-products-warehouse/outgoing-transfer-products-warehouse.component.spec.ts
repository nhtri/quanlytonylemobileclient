import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingTransferProductsWarehouseComponent } from './outgoing-transfer-products-jp.component';

describe('OutgoingTransferProductsJpComponent', () => {
  let component: OutgoingTransferProductsWarehouseComponent;
  let fixture: ComponentFixture<OutgoingTransferProductsWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingTransferProductsWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingTransferProductsWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
