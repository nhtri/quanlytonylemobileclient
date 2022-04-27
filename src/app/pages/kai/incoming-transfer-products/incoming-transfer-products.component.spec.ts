import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingTransferProductsComponent } from './incoming-transfer-products.component';

describe('IncomingTransferProductsComponent', () => {
  let component: IncomingTransferProductsComponent;
  let fixture: ComponentFixture<IncomingTransferProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingTransferProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingTransferProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
