import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableRamComponent } from './smart-table-ram.component';

describe('SmartTableRamComponent', () => {
  let component: SmartTableRamComponent;
  let fixture: ComponentFixture<SmartTableRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableRamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
