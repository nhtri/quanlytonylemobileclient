import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythunhatComponent } from './quanlythunhat.component';

describe('QuanlythunhatComponent', () => {
  let component: QuanlythunhatComponent;
  let fixture: ComponentFixture<QuanlythunhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythunhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythunhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
