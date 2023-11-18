import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAcudienteComponent } from './datos-acudiente.component';

describe('DatosAcudienteComponent', () => {
  let component: DatosAcudienteComponent;
  let fixture: ComponentFixture<DatosAcudienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosAcudienteComponent]
    });
    fixture = TestBed.createComponent(DatosAcudienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
