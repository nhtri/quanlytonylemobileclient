import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythuComponent } from './quanlythu.component';

describe('QuanlythuComponent', () => {
  let component: QuanlythuComponent;
  let fixture: ComponentFixture<QuanlythuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
