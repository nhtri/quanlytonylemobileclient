import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangComponent } from './quanlydanhsachdonhang.component';

describe('QuanlydanhsachdonhangComponent', () => {
  let component: QuanlydanhsachdonhangComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
