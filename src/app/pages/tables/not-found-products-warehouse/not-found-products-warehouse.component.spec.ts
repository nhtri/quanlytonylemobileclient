import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundProductsWarehouseComponent } from './not-found-products-jp.component';

describe('NotFoundProductsJpComponent', () => {
  let component: NotFoundProductsWarehouseComponent;
  let fixture: ComponentFixture<NotFoundProductsWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundProductsWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundProductsWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
