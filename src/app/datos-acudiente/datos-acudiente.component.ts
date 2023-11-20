import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-datos-acudiente',
  templateUrl: './datos-acudiente.component.html',
  styleUrls: ['./datos-acudiente.component.css']
})
export class DatosAcudienteComponent implements OnInit{

      //Decalracion variables de clase
      esMenorDeEdad: boolean = false;
      
      nombreAcudiente = new FormControl();
      apellidoAcudiente = new FormControl();
      telefonoAcudiente  = new FormControl();
      correoAcudiente  = new FormControl();
      direccionAcudiente  = new FormControl();
      paisAcudiente  = new FormControl();
      estratoAcudiente  = new FormControl();
      fechaNacimientoAcudiente  = new FormControl();
      tipoDocumentoAcudiente  = new FormControl();
      numeroIdentificacionAcudeinte = new FormControl();
      estadoCivilAcudiente  = new FormControl();   
      parentescoAcudiente = new FormControl();

      myForm: FormGroup;
    
      constructor(private fb: FormBuilder, private componentsService:ComponentsService) {
        this.myForm = this.fb.group({
          nombreAcudiente: ['', Validators.required],
          apellidoAcudiente: ['', Validators.required],
          telefonoAcudiente: ['', Validators.required],
          correoAcudiente: ['', Validators.required],
          direccionAcudiente: ['', Validators.required],
          paisAcudiente: ['', Validators.required],
          estratoAcudiente: ['', Validators.required],
          fechaNacimientoAcudiente: ['', Validators.required],
          tipoDocumentoAcudiente: ['', Validators.required],
          estadoCivilAcudiente: ['', Validators.required],
          numeroIdentificacionAcudiente: ['', Validators.required],
          parentescoAcudiente: ['', Validators.required],
          
        });
      }
  
      fechaNacimientoSeleccionada(event: Event) {//Eventoo para poder verificar la edad de la persona
          //emitir eventos
      }
      ngOnInit() {
        this.componentsService.esMenorDeEdad$.subscribe(esMenor => {
          this.esMenorDeEdad = esMenor;
        });
    
      }
      @Output() datosEnviados = new EventEmitter<any>();

      // Inside the onSubmit method, emit the form data to the parent component
      onSubmit() {
        this.componentsService.updateFormValues(this.myForm.value);
      }
     }
