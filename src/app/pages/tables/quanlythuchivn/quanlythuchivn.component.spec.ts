import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythuchivnComponent } from './quanlythuchivn.component';

describe('QuanlythuchivnComponent', () => {
  let component: QuanlythuchivnComponent;
  let fixture: ComponentFixture<QuanlythuchivnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythuchivnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythuchivnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
