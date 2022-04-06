import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDoiMayComponent } from './smart-table-doi-may.component';

describe('SmartTableDoiMayComponent', () => {
  let component: SmartTableDoiMayComponent;
  let fixture: ComponentFixture<SmartTableDoiMayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDoiMayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDoiMayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
