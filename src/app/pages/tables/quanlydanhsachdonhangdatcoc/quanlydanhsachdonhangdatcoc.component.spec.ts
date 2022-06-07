import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangdatcocComponent } from './quanlydanhsachdonhangdatcoc.component';

describe('QuanlydanhsachdonhangdatcocComponent', () => {
  let component: QuanlydanhsachdonhangdatcocComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangdatcocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangdatcocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangdatcocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
