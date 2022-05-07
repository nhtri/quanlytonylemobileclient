import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundProductsComponent } from './not-found-products.component';

describe('NotFoundProductsComponent', () => {
  let component: NotFoundProductsComponent;
  let fixture: ComponentFixture<NotFoundProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
