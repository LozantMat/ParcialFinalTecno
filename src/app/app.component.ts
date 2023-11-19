// componente-principal.component.ts
import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="parcialFinal"
  datosTipoCuenta: any;
  datosPersonales: any;
  datosAcudiente: any;
  esMenorDeEdad: boolean = false;
  mostrarFormularioConfirmacion = false;

  

  constructor(private componentsService: ComponentsService, private cdr:ChangeDetectorRef) {}

  recibirDatosTipoCuenta(datos: any) {
    this.datosTipoCuenta = datos;
    console.log('Tipo cuenta está en padre', datos)
  }

  recibirDatosPersonales(datos: any) {
    this.datosPersonales = datos;
    console.log('Personal está en padre', datos)
  }

  recibirDatosAcudiente(datos: any) {
    this.datosAcudiente = datos;
  }
  datosConfirmacion: any;
  toggleFormulario() {
    this.mostrarFormularioConfirmacion = !this.mostrarFormularioConfirmacion;
    this.datosConfirmacion = {
      datosTipoCuenta: this.datosTipoCuenta,
      datosPersonales: this.datosPersonales,
      datosAcudiente: this.datosAcudiente
      
  }
  console.log('datosConfirmacion:', this.datosConfirmacion);
  this.cdr.detectChanges
}
}
