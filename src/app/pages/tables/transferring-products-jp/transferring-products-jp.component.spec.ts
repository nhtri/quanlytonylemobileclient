import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferringProductsJpComponent } from './transferring-products-jp.component';

describe('TransferringProductsJpComponent', () => {
  let component: TransferringProductsJpComponent;
  let fixture: ComponentFixture<TransferringProductsJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferringProductsJpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferringProductsJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
