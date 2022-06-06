import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhsachdonhangchonhatComponent } from './quanlydanhsachdonhangchonhat.component';

describe('QuanlydanhsachdonhangchonhatComponent', () => {
  let component: QuanlydanhsachdonhangchonhatComponent;
  let fixture: ComponentFixture<QuanlydanhsachdonhangchonhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlydanhsachdonhangchonhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhsachdonhangchonhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
