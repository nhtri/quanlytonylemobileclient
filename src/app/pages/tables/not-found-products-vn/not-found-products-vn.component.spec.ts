import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundProductsVnComponent } from './not-found-products-jp.component';

describe('NotFoundProductsJpComponent', () => {
  let component: NotFoundProductsVnComponent;
  let fixture: ComponentFixture<NotFoundProductsVnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundProductsVnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundProductsVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
