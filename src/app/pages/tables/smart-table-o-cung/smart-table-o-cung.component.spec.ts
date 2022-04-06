import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableOCungComponent } from './smart-table-o-cung.component';

describe('SmartTableOCungComponent', () => {
  let component: SmartTableOCungComponent;
  let fixture: ComponentFixture<SmartTableOCungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableOCungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableOCungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
