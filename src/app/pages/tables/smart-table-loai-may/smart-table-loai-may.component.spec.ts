import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableLoaiMayComponent } from './smart-table-loai-may.component';

describe('SmartTableLoaiMayComponent', () => {
  let component: SmartTableLoaiMayComponent;
  let fixture: ComponentFixture<SmartTableLoaiMayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableLoaiMayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableLoaiMayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
