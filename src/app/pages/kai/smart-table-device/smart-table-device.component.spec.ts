import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDeviceComponent } from './smart-table-device.component';

describe('SmartTableDeviceComponent', () => {
  let component: SmartTableDeviceComponent;
  let fixture: ComponentFixture<SmartTableDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
