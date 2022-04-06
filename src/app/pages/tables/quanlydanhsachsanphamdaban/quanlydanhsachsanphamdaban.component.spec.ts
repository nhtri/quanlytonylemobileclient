import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachsanphamdabanComponent } from './quanlydanhsachsanphamdaban.component';

describe('QuanlydanhsachsanphamdabanComponent', () => {
  let component: QuanlydanhsachsanphamdabanComponent;
  let fixture: ComponentFixture<QuanlydanhsachsanphamdabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachsanphamdabanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachsanphamdabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
