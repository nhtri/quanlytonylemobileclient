import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangdatcocvnComponent } from './quanlydanhsachdonhangdatcocvn.component';

describe('QuanlydanhsachdonhangdatcocvnComponent', () => {
  let component: QuanlydanhsachdonhangdatcocvnComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangdatcocvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangdatcocvnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangdatcocvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
