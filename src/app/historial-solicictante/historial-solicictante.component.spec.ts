import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialSolicictanteComponent } from './historial-solicictante.component';

describe('HistorialSolicictanteComponent', () => {
  let component: HistorialSolicictanteComponent;
  let fixture: ComponentFixture<HistorialSolicictanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialSolicictanteComponent]
    });
    fixture = TestBed.createComponent(HistorialSolicictanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
