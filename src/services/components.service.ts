import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private esMenorDeEdadSource = new BehaviorSubject<boolean>(false);
  esMenorDeEdad$ = this.esMenorDeEdadSource.asObservable();
  private datosConfirmacionSubject = new BehaviorSubject<any>(null);
  datosConfirmacion$ = this.datosConfirmacionSubject.asObservable();

  actualizarEstadoEdad(esMenorDeEdad: boolean) {
    this.esMenorDeEdadSource.next(esMenorDeEdad);
  
}
guardarDatosConfirmacion(datosTipoCuenta: any, datosPersonales: any, datosAcudiente: any): void {
  const confirmationData = {
    datosTipoCuenta,
    datosPersonales,
    datosAcudiente
  };

  // Almacena los datos de confirmación localmente
  this.datosConfirmacionSubject.next(confirmationData);
}
}
