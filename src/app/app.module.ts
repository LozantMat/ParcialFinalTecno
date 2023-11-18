import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosAcudienteComponent } from './datos-acudiente/datos-acudiente.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoCuentaComponent,
    DatosPersonalesComponent,
    DatosAcudienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
