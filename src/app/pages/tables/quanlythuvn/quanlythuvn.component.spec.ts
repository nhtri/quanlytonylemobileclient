import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythuvnComponent } from './quanlythuvn.component';

describe('QuanlythuvnComponent', () => {
  let component: QuanlythuvnComponent;
  let fixture: ComponentFixture<QuanlythuvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythuvnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythuvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
