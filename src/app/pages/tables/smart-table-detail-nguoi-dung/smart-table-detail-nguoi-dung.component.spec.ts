import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDetailNguoiDungComponent } from './smart-table-detail-nguoi-dung.component';

describe('SmartTableDetailNguoiDungComponent', () => {
  let component: SmartTableDetailNguoiDungComponent;
  let fixture: ComponentFixture<SmartTableDetailNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDetailNguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDetailNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
