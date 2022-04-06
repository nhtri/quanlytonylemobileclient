import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableTaoDonHangChoDaiLyComponent } from './smart-table-tao-don-hang-cho-dai-ly.component';

describe('SmartTableTaoDonHangChoDaiLyComponent', () => {
  let component: SmartTableTaoDonHangChoDaiLyComponent;
  let fixture: ComponentFixture<SmartTableTaoDonHangChoDaiLyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableTaoDonHangChoDaiLyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableTaoDonHangChoDaiLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
