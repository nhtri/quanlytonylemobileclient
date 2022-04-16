import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythuchinhatComponent } from './quanlythuchinhat.component';

describe('QuanlythuchinhatComponent', () => {
  let component: QuanlythuchinhatComponent;
  let fixture: ComponentFixture<QuanlythuchinhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythuchinhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythuchinhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
