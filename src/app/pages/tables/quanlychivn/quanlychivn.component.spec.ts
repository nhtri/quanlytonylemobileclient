import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlychivnComponent } from './quanlychivn.component';

describe('QuanlychivnComponent', () => {
  let component: QuanlychivnComponent;
  let fixture: ComponentFixture<QuanlychivnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlychivnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlychivnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
