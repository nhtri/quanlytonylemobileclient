import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangdatcocnhatComponent } from './quanlydanhsachdonhangdatcocnhat.component';

describe('QuanlydanhsachdonhangdatcocnhatComponent', () => {
  let component: QuanlydanhsachdonhangdatcocnhatComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangdatcocnhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangdatcocnhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangdatcocnhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
