import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbansanphamComponent } from './editbansanpham.component';

describe('EditbansanphamComponent', () => {
  let component: EditbansanphamComponent;
  let fixture: ComponentFixture<EditbansanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbansanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbansanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
