import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangvnComponent } from './quanlydanhsachdonhangvn.component';

describe('QuanlydanhsachdonhangvnComponent', () => {
  let component: QuanlydanhsachdonhangvnComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangvnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
