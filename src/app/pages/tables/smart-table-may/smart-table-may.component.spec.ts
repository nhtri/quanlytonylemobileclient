import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableMayComponent } from './smart-table-may.component';

describe('SmartTableMayComponent', () => {
  let component: SmartTableMayComponent;
  let fixture: ComponentFixture<SmartTableMayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableMayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableMayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
