import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferringProductsComponent } from './transferring-products.component';

describe('TransferringProductsComponent', () => {
  let component: TransferringProductsComponent;
  let fixture: ComponentFixture<TransferringProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferringProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferringProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
