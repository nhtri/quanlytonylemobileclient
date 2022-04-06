import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDetailComponent } from './smart-table-detail.component';

describe('SmartTableDetailComponent', () => {
  let component: SmartTableDetailComponent;
  let fixture: ComponentFixture<SmartTableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
