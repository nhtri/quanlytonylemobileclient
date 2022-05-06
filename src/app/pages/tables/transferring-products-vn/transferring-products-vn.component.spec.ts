import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferringProductsVnComponent } from './transferring-products-jp.component';

describe('TransferringProductsJpComponent', () => {
  let component: TransferringProductsVnComponent;
  let fixture: ComponentFixture<TransferringProductsVnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferringProductsVnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferringProductsVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
