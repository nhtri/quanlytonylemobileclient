import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlykhachhangnhatComponent } from './quanlykhachhangnhat.component';

describe('QuanlykhachhangnhatComponent', () => {
  let component: QuanlykhachhangnhatComponent;
  let fixture: ComponentFixture<QuanlykhachhangnhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlykhachhangnhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlykhachhangnhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
