import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferredProductsJpComponent } from './transferred-products-jp.component';

describe('TransferredProductsJpComponent', () => {
  let component: TransferredProductsJpComponent;
  let fixture: ComponentFixture<TransferredProductsJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferredProductsJpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferredProductsJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
