import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhienbanComponent } from './phienban.component';

describe('PhienbanComponent', () => {
  let component: PhienbanComponent;
  let fixture: ComponentFixture<PhienbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhienbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhienbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
