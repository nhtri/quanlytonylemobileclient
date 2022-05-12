import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupsKaiComponent } from './product-groups-kai.component';

describe('ProductGroupsKaiComponent', () => {
  let component: ProductGroupsKaiComponent;
  let fixture: ComponentFixture<ProductGroupsKaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupsKaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupsKaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
