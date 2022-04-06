import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomsanphamComponent } from './nhomsanpham.component';

describe('NhomsanphamComponent', () => {
  let component: NhomsanphamComponent;
  let fixture: ComponentFixture<NhomsanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhomsanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
