import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlykhachhangvnComponent } from './quanlykhachhangvn.component';

describe('QuanlykhachhangvnComponent', () => {
  let component: QuanlykhachhangvnComponent;
  let fixture: ComponentFixture<QuanlykhachhangvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlykhachhangvnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlykhachhangvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
