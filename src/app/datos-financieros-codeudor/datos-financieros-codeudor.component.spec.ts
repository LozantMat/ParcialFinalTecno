import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFinancierosCodeudorComponent } from './datos-financieros-codeudor.component';

describe('DatosFinancierosCodeudorComponent', () => {
  let component: DatosFinancierosCodeudorComponent;
  let fixture: ComponentFixture<DatosFinancierosCodeudorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosFinancierosCodeudorComponent]
    });
    fixture = TestBed.createComponent(DatosFinancierosCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
