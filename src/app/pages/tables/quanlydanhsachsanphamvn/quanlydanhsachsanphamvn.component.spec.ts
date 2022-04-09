import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachsanphamvnComponent } from './quanlydanhsachsanphamvn.component';

describe('QuanlydanhsachsanphamvnComponent', () => {
  let component: QuanlydanhsachsanphamvnComponent;
  let fixture: ComponentFixture<QuanlydanhsachsanphamvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachsanphamvnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachsanphamvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
