import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundProductsJpComponent } from './not-found-products-jp.component';

describe('NotFoundProductsJpComponent', () => {
  let component: NotFoundProductsJpComponent;
  let fixture: ComponentFixture<NotFoundProductsJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundProductsJpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundProductsJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
