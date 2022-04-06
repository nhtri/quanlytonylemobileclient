import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlychiComponent } from './quanlychi.component';

describe('QuanlychiComponent', () => {
  let component: QuanlychiComponent;
  let fixture: ComponentFixture<QuanlychiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlychiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlychiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
