import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlychinhatComponent } from './quanlychinhat.component';

describe('QuanlychinhatComponent', () => {
  let component: QuanlychinhatComponent;
  let fixture: ComponentFixture<QuanlychinhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlychinhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlychinhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
