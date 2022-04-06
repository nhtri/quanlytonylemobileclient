import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableMayDaBanComponent } from './smart-table-may-da-ban.component';

describe('SmartTableMayDaBanComponent', () => {
  let component: SmartTableMayDaBanComponent;
  let fixture: ComponentFixture<SmartTableMayDaBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableMayDaBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableMayDaBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
