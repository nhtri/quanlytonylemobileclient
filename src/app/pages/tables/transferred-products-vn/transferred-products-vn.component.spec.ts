import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferredProductsVnComponent } from './transferred-products-jp.component';

describe('TransferredProductsJpComponent', () => {
  let component: TransferredProductsVnComponent;
  let fixture: ComponentFixture<TransferredProductsVnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferredProductsVnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferredProductsVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
