import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachsanphamvnComponent } from './danhsachsanphamvn.component';

describe('DanhsachsanphamvnComponent', () => {
  let component: DanhsachsanphamvnComponent;
  let fixture: ComponentFixture<DanhsachsanphamvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachsanphamvnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachsanphamvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
