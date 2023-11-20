import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private esMenorDeEdadSource = new BehaviorSubject<boolean>(false);
  esMenorDeEdad$ = this.esMenorDeEdadSource.asObservable();
  private esDeCreditoSource = new BehaviorSubject<boolean>(false);
  esDeCredito$ = this.esDeCreditoSource.asObservable();

  actualizarEstadoEdad(esMenorDeEdad: boolean) {
    this.esMenorDeEdadSource.next(esMenorDeEdad);
  
}
actualizarTipoDeCuenta(esCredito:boolean) {
    this.esDeCreditoSource.next(esCredito)
}
private formValuesSource = new BehaviorSubject<any>(null);
  formValues$ = this.formValuesSource.asObservable();

  updateFormValues(data: any) {
    this.formValuesSource.next(data);
  }

  generateRandomNumber(): string {
    // Generate a random 10-digit number
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }
  private showDetailsSubject = new BehaviorSubject<boolean>(false);
  showDetails$ = this.showDetailsSubject.asObservable();

  setShowDetails(value: boolean) {
    this.showDetailsSubject.next(value);
  }
}
