import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})

export class DatosPersonalesComponent {

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
  
    constructor(private fb: FormBuilder) {
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

    fechaNacimientoSeleccionada(event: Event) {//Eventoo para poder verificar la edad de la persona
        //emitir eventos
    }
  
  
  }
  
  
