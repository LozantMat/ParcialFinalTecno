import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentsService } from 'src/services/components.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})

export class DatosPersonalesComponent {

  @Output() fechaNacimientoCambiada = new EventEmitter<string>();
    //Decalracion variables de clase
  
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

    fechaNacimiento = new FormControl();

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

    validarFecha(event:Event){ //realiza la verificacion de la fecha. La restringe dentro de los dos proximos meses. Si no cumple con este limite, pone el campo en blanco
    const inputElement = event.target as HTMLInputElement;
    const date = new Date(inputElement.value);
    const currentDate = new Date();

    if (date >= currentDate) {
        this.showErrorAlert("Porfavor seleccionar una fecha valida");
        inputElement.value = ''
    }
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
  
  
