import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentsService } from 'src/services/components.service';
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})

export class DatosPersonalesComponent {

  @Output() fechaNacimientoCambiada = new EventEmitter<string>();
    //Decalracion variables de clase
    nombre = new FormControl();
    apellido = new FormControl();
    telefono = new FormControl();
    correo = new FormControl();
    direccion = new FormControl();
    pais = new FormControl();
    estrato = new FormControl();
    fechaNacimiento = new FormControl();
    tipoDocumento = new FormControl();
    estadoCivil = new FormControl();
    numeroIdentificacion = new FormControl();
  
    myForm: FormGroup;
  
    constructor(private fb: FormBuilder, private componentsService:ComponentsService) {
      this.myForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        telefono: ['', Validators.required],
        correo: ['', Validators.required],
        direccion: ['', Validators.required],
        pais: ['', Validators.required],
        estrato: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        tipoDocumento: ['', Validators.required],
        estadoCivil: ['', Validators.required],
        numeroIdentificacion: ['', Validators.required],
      });
    }

    fechaNacimientoSeleccionada() {
      // Llama al servicio para actualizar el estado
      this.actualizarEstadoEdad();
      this.fechaNacimientoCambiada.emit(this.fechaNacimiento.value);
    }

    actualizarEstadoEdad() {
      const esMenorDeEdad = this.esMenorDeEdad(); // Implementa la lógica de acuerdo a tu necesidad
      this.componentsService.actualizarEstadoEdad(esMenorDeEdad);
    }
  
    private esMenorDeEdad(): boolean {
      const fechaNacimiento = this.fechaNacimiento.value;
      const hoy = new Date();
      const fechaNacimientoDate = new Date(fechaNacimiento);
  
      const edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  
    return edad < 18;
      
  }
  @Output() datosEnviados = new EventEmitter<any>();

// Inside the onSubmit method, emit the form data to the parent component
onSubmit() {
  this.componentsService.updateFormValues(this.myForm.value);
}
}
  
  
