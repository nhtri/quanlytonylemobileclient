import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BansanphamComponent } from './bansanpham.component';

describe('BansanphamComponent', () => {
  let component: BansanphamComponent;
  let fixture: ComponentFixture<BansanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BansanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BansanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
