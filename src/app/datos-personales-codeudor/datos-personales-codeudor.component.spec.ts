import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesCodeudorComponent } from './datos-personales-codeudor.component';

describe('DatosPersonalesCodeudorComponent', () => {
  let component: DatosPersonalesCodeudorComponent;
  let fixture: ComponentFixture<DatosPersonalesCodeudorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosPersonalesCodeudorComponent]
    });
    fixture = TestBed.createComponent(DatosPersonalesCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
