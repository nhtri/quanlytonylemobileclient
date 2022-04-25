import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomsanphamnhatComponent } from './nhomsanphamnhat.component';

describe('NhomsanphamnhatComponent', () => {
  let component: NhomsanphamnhatComponent;
  let fixture: ComponentFixture<NhomsanphamnhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhomsanphamnhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomsanphamnhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
