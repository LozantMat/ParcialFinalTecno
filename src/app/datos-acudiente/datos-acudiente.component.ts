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

  enviarDatos() {
    if (this.myForm.valid) {
      const datos = this.myForm.value;
      this.datosEnviados.emit({ datosPersonales: datos });
    }}}
