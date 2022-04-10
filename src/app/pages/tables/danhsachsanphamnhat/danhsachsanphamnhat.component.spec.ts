import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachsanphamnhatComponent } from './danhsachsanphamnhat.component';

describe('DanhsachsanphamnhatComponent', () => {
  let component: DanhsachsanphamnhatComponent;
  let fixture: ComponentFixture<DanhsachsanphamnhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachsanphamnhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachsanphamnhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
