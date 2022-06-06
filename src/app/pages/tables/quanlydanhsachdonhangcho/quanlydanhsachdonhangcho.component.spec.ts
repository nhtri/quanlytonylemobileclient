import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangchoComponent } from './quanlydanhsachdonhangcho.component';

describe('QuanlydanhsachdonhangchoComponent', () => {
  let component: QuanlydanhsachdonhangchoComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
