import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableChipComponent } from './smart-table-chip.component';

describe('SmartTableChipComponent', () => {
  let component: SmartTableChipComponent;
  let fixture: ComponentFixture<SmartTableChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
