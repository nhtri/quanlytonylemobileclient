import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdanhsachsanphamComponent } from './editdanhsachsanpham.component';

describe('EditdanhsachsanphamComponent', () => {
  let component: EditdanhsachsanphamComponent;
  let fixture: ComponentFixture<EditdanhsachsanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdanhsachsanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdanhsachsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
