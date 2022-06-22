import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachsanphamkhachhangdamuaComponent } from './danhsachsanphamkhachhangdamua.component';

describe('DanhsachsanphamkhachhangdamuaComponent', () => {
  let component: DanhsachsanphamkhachhangdamuaComponent;
  let fixture: ComponentFixture<DanhsachsanphamkhachhangdamuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachsanphamkhachhangdamuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachsanphamkhachhangdamuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
