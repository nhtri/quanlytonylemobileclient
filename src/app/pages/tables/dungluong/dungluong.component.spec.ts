import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungluongComponent } from './dungluong.component';

describe('DungluongComponent', () => {
  let component: DungluongComponent;
  let fixture: ComponentFixture<DungluongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungluongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungluongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
