import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableCompleteOrdersComponent } from './smart-table-complete-orders.component';

describe('SmartTableCompleteOrdersComponent', () => {
  let component: SmartTableCompleteOrdersComponent;
  let fixture: ComponentFixture<SmartTableCompleteOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableCompleteOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableCompleteOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
