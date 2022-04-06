import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableManHinhComponent } from './smart-table-man-hinh.component';

describe('SmartTableManHinhComponent', () => {
  let component: SmartTableManHinhComponent;
  let fixture: ComponentFixture<SmartTableManHinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableManHinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableManHinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
