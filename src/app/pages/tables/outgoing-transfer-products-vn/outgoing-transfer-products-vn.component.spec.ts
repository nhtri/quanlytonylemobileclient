import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingTransferProductsVnComponent } from './outgoing-transfer-products-jp.component';

describe('OutgoingTransferProductsJpComponent', () => {
  let component: OutgoingTransferProductsVnComponent;
  let fixture: ComponentFixture<OutgoingTransferProductsVnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingTransferProductsVnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingTransferProductsVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
