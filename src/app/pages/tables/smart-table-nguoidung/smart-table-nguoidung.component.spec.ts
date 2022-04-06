import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableNguoidungComponent } from './smart-table-nguoidung.component';

describe('SmartTableNguoidungComponent', () => {
  let component: SmartTableNguoidungComponent;
  let fixture: ComponentFixture<SmartTableNguoidungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableNguoidungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
