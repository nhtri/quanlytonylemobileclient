import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachsanphamComponent } from './quanlydanhsachsanpham.component';

describe('QuanlydanhsachsanphamComponent', () => {
  let component: QuanlydanhsachsanphamComponent;
  let fixture: ComponentFixture<QuanlydanhsachsanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachsanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
