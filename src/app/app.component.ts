import { Component, ViewChild } from '@angular/core';
import { ComponentsService } from 'src/services/components.service';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tipoCuenta: string=""
  showDetails = false;
  mostrarFormularioConfirmacion = false;
  isFormValid: boolean = true;

 
  constructor(private componentsService: ComponentsService) {}

  toggleFormulario() {
    this.mostrarFormularioConfirmacion = !this.mostrarFormularioConfirmacion;
    
  }
  
  ngOnInit() {
    this.componentsService.showDetails$.subscribe(value => {
      this.showDetails = value;
    });
  }
  showErrorAlert(errorMessage: string) {
    Swal.fire({
      title: 'Error!',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
}
