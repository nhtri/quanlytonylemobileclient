import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachsanphamdabannhatComponent } from './quanlydanhsachsanphamdabannhat.component';

describe('QuanlydanhsachsanphamdabannhatComponent', () => {
  let component: QuanlydanhsachsanphamdabannhatComponent;
  let fixture: ComponentFixture<QuanlydanhsachsanphamdabannhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachsanphamdabannhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachsanphamdabannhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
