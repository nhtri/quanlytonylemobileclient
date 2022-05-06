import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingTransferProductsJpComponent } from './outgoing-transfer-products-jp.component';

describe('OutgoingTransferProductsJpComponent', () => {
  let component: OutgoingTransferProductsJpComponent;
  let fixture: ComponentFixture<OutgoingTransferProductsJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingTransferProductsJpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingTransferProductsJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
