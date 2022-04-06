import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensanphamComponent } from './tensanpham.component';

describe('TensanphamComponent', () => {
  let component: TensanphamComponent;
  let fixture: ComponentFixture<TensanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TensanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
