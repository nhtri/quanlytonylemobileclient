import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlytonychartjsComponent } from './quanlytonychartjs.component';

describe('QuanlytonychartjsComponent', () => {
  let component: QuanlytonychartjsComponent;
  let fixture: ComponentFixture<QuanlytonychartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlytonychartjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlytonychartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
