import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionAhorrosComponent } from './confirmacion-ahorros.component';

describe('ConfirmacionAhorrosComponent', () => {
  let component: ConfirmacionAhorrosComponent;
  let fixture: ComponentFixture<ConfirmacionAhorrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionAhorrosComponent]
    });
    fixture = TestBed.createComponent(ConfirmacionAhorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
