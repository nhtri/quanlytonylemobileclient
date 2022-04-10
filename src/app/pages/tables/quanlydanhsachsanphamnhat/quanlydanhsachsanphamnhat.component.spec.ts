import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachsanphamnhatComponent } from './quanlydanhsachsanphamnhat.component';

describe('QuanlydanhsachsanphamnhatComponent', () => {
  let component: QuanlydanhsachsanphamnhatComponent;
  let fixture: ComponentFixture<QuanlydanhsachsanphamnhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachsanphamnhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachsanphamnhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
