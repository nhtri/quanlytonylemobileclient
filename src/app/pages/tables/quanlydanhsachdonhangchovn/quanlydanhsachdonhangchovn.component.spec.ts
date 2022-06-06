import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangchovnComponent } from './quanlydanhsachdonhangchovn.component';

describe('QuanlydanhsachdonhangchovnComponent', () => {
  let component: QuanlydanhsachdonhangchovnComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangchovnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangchovnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangchovnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
