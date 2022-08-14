import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythongtinmaythumuaComponent } from './quanlythongtinmaythumua.component';

describe('QuanlythongtinmaythumuaComponent', () => {
  let component: QuanlythongtinmaythumuaComponent;
  let fixture: ComponentFixture<QuanlythongtinmaythumuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythongtinmaythumuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythongtinmaythumuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
