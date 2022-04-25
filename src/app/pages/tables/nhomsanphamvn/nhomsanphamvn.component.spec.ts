import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomsanphamvnComponent } from './nhomsanphamvn.component';

describe('NhomsanphamvnComponent', () => {
  let component: NhomsanphamvnComponent;
  let fixture: ComponentFixture<NhomsanphamvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhomsanphamvnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomsanphamvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
