import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-datos-personales-codeudor',
  templateUrl: './datos-personales-codeudor.component.html',
  styleUrls: ['./datos-personales-codeudor.component.css']
})
export class DatosPersonalesCodeudorComponent {


  nombreCodeudor = new FormControl();
  apellidoCodeudor = new FormControl();
  telefonoCodeudor  = new FormControl();
  correoCodeudor  = new FormControl();
  direccionCodeudor  = new FormControl();
  paisCodeudor  = new FormControl();
  estratoCodeudor  = new FormControl();
  fechaNacimientoCodeudor  = new FormControl();
  tipoDocumentoCodeudor  = new FormControl();
  numeroIdentificacionCodeudor = new FormControl();
  estadoCivilCodeudor  = new FormControl();   
  parentescoCodeudor= new FormControl();

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private componentsService:ComponentsService) {
    this.myForm = this.fb.group({
      nombreCodeudor: ['', Validators.required],
      apellidoCodeudor: ['', Validators.required],
      telefonoCodeudor: ['', Validators.required],
      correoCodeudor: ['', Validators.required],
      direccionCodeudor: ['', Validators.required],
      paisCodeudor: ['', Validators.required],
      estratoCodeudor: ['', Validators.required],
      fechaNacimientoCodeudor: ['', Validators.required],
      tipoDocumentoCodeudor: ['', Validators.required],
      estadoCivilCodeudor: ['', Validators.required],
      numeroIdentificacionCodeudor: ['', Validators.required],
      parentescoCodeudor: ['', Validators.required],
      
    });
  }
}
