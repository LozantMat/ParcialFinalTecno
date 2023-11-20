import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-tipo-cuenta',
  templateUrl: './tipo-cuenta.component.html',
  styleUrls: ['./tipo-cuenta.component.css']
})
export class TipoCuentaComponent {
  //Decalracion variables de clase

  myForm: FormGroup;
  constructor(private fb: FormBuilder, private componentsService:ComponentsService) {
    this.myForm = this.fb.group({
      tipoCuenta: ['', Validators.required],
      responsabilidadPersona: ['', Validators.required],
      nitOpcional: [''],
      motivo: ['', Validators.required],
      docIdentidad: ['', Validators.required],
      docImagen: ['', Validators.required],
      docFirma: ['', Validators.required],
      docFactura: ['', Validators.required],
      duracion: ['', Validators.required],
      depositoInicial: ['', Validators.required],
    });
  }

  showInputText: boolean = false;

  toggleInputField(event: Event) {//aparece el campo de nit dependiendo de el tipo de responsabilidad
    const radioButton = event.target as HTMLInputElement;

    if (radioButton.value === 'personaJuridica') {
      this.showInputText = true;
    } else {
      this.showInputText = false;
    }
  }

  manejarDocumento(event: Event) {//metodo que confirma que se subio un archivo a selector de archivos (para el documento de identidad)
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);

    if (file) {
      //condicion para decir que existe archivo
    }
  }

  manejarImagen(event: Event) {//metodo que confirma que se subio un archivo a selector de archivos (para la imagen)
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);

    if (file) {
      //condicion para decir que existe archivo
    }
  }

  manejarFirma(event: Event) {//metodo que confirma que se subio un archivo a selector de archivos (para la firma)
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);

    if (file) {
      //condicion para decir que existe archivo
    }
  }

  manejarFactura(event: Event) {//metodo que confirma que se subio un archivo a selector de archivos (para la factura)
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);

    if (file) {
      //condicion para decir que existe archivo
    }
  }
  @Output() datosEnviados = new EventEmitter<any>();

  // Inside the onSubmit method, emit the form data to the parent component
  onRadioChange() {
   const tipoCuentaControl = this.myForm.get('tipoCuenta');
  if (tipoCuentaControl) {
    const selectedTipoCuenta = tipoCuentaControl.value;
    console.log('Selected Tipo de Cuenta:', selectedTipoCuenta);
    console.log('Form State:', this.myForm.value);
  }
  }
}
