import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStoragesComponent } from './product-storages.component';

describe('ProductStoragesComponent', () => {
  let component: ProductStoragesComponent;
  let fixture: ComponentFixture<ProductStoragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStoragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStoragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
