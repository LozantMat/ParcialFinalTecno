import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-datos-financieros-codeudor',
  templateUrl: './datos-financieros-codeudor.component.html',
  styleUrls: ['./datos-financieros-codeudor.component.css']
})
export class DatosFinancierosCodeudorComponent {
  
  nivelSisbenCodeudor = new FormControl();
  ocupacionCodeudor = new FormControl();
  nombreEmpresaCodeudor  = new FormControl();
  direccionCodeudor  = new FormControl();
  telefonoCodeudor  = new FormControl();
  nitCodeudor  = new FormControl();
  cargoCodeudor  = new FormControl();
  ingresosCodeudor  = new FormControl();
  egresosCodeudor  = new FormControl();
  patrimonioCodeudor = new FormControl();

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private componentsService:ComponentsService) {
    this.myForm = this.fb.group({
     nivelSisbenCodeudor: ['', Validators.required],
     ocupacionCodeudor: ['', Validators.required],
     nombreEmpresaCodeudor: ['', Validators.required],
     direccionCodeudor: ['', Validators.required],
     telefonoCodeudor: ['', Validators.required],
     nitCodeudor: ['', Validators.required],
     cargoCodeudor: ['', Validators.required],
     ingresosCodeudor: ['', Validators.required],
     egresosCodeudor: ['', Validators.required],
     patrimonioCodeudor: ['', Validators.required],
    });
  }
}
