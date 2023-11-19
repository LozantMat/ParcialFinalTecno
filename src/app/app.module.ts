import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosAcudienteComponent } from './datos-acudiente/datos-acudiente.component';
import { ConfirmacionAhorrosComponent } from './confirmacion-ahorros/confirmacion-ahorros.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoCuentaComponent,
    DatosPersonalesComponent,
    DatosAcudienteComponent,
    ConfirmacionAhorrosComponent,
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
