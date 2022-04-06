import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableOrdersComponent } from './smart-table-orders.component';

describe('SmartTableOrdersComponent', () => {
  let component: SmartTableOrdersComponent;
  let fixture: ComponentFixture<SmartTableOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
