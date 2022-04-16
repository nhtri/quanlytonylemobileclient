import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachsanphamdabanvnComponent } from './quanlydanhsachsanphamdabanvn.component';

describe('QuanlydanhsachsanphamdabanvnComponent', () => {
  let component: QuanlydanhsachsanphamdabanvnComponent;
  let fixture: ComponentFixture<QuanlydanhsachsanphamdabanvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachsanphamdabanvnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachsanphamdabanvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
