import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlykhachhangComponent } from './quanlykhachhang.component';

describe('QuanlykhachhangComponent', () => {
  let component: QuanlykhachhangComponent;
  let fixture: ComponentFixture<QuanlykhachhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlykhachhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlykhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
