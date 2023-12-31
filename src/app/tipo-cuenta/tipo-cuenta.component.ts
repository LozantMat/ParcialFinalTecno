import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-cuenta',
  templateUrl: './tipo-cuenta.component.html',
  styleUrls: ['./tipo-cuenta.component.css']
})
export class TipoCuentaComponent {
  //Decalracion variables de clase
  tipoCuenta = new FormControl();
  responsabilidadPersona = new FormControl();
  nitOpcional = new FormControl();
  motivo = new FormControl();
  docIdentidad = new FormControl();
  docImagen = new FormControl();
  docFirma = new FormControl();
  docFactura = new FormControl();
  duracion = new FormControl();
  depositoIncial = new FormControl();

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      tipoCuenta: ['', Validators.required],
      responsabilidadPersona: ['', Validators.required],
      nitOpcional: ['', Validators.required],
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


}


