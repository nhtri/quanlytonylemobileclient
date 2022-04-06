import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaocaothueComponent } from './baocaothue.component';

describe('BaocaothueComponent', () => {
  let component: BaocaothueComponent;
  let fixture: ComponentFixture<BaocaothueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaocaothueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaocaothueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
