import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableMobileComponent } from './smart-table-mobile.component';

describe('SmartTableMobileComponent', () => {
  let component: SmartTableMobileComponent;
  let fixture: ComponentFixture<SmartTableMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
