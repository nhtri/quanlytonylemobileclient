import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDaXuLyNguoiMuaComponent } from './smart-table-da-xu-ly-nguoi-mua.component';

describe('SmartTableDaXuLyNguoiMuaComponent', () => {
  let component: SmartTableDaXuLyNguoiMuaComponent;
  let fixture: ComponentFixture<SmartTableDaXuLyNguoiMuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableDaXuLyNguoiMuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDaXuLyNguoiMuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
