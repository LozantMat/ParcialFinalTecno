import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-historial-solicictante',
  templateUrl: './historial-solicictante.component.html',
  styleUrls: ['./historial-solicictante.component.css']
})
export class HistorialSolicictanteComponent {
      
     nivelSisben = new FormControl();
     ocupacion = new FormControl();
     nombreEmpresa  = new FormControl();
     direccion  = new FormControl();
     telefono  = new FormControl();
     nit  = new FormControl();
     cargo  = new FormControl();
     ingresos  = new FormControl();
     egresos  = new FormControl();
     patrimonio = new FormControl();

     myForm: FormGroup;
   
     constructor(private fb: FormBuilder, private componentsService:ComponentsService) {
       this.myForm = this.fb.group({
        nivelSisben: ['', Validators.required],
        ocupacion: ['', Validators.required],
        nombreEmpresa: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        nit: ['', Validators.required],
        cargo: ['', Validators.required],
        ingresos: ['', Validators.required],
        egresos: ['', Validators.required],
        patrimonio: ['', Validators.required],
       });
     }
}
