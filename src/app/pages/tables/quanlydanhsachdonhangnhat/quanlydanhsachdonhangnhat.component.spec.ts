import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangnhatComponent } from './quanlydanhsachdonhangnhat.component';

describe('QuanlydanhsachdonhangnhatComponent', () => {
  let component: QuanlydanhsachdonhangnhatComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangnhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangnhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangnhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
