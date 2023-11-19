import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-confirmacion-ahorros',
  templateUrl: './confirmacion-ahorros.component.html',
  styleUrls: ['./confirmacion-ahorros.component.css']
})
export class ConfirmacionAhorrosComponent {
  @Input() datosTipoCuenta: any;
  @Input() datosPersonales: any;
  @Input() datosAcudiente: any;


  datosConfirmacion: any;
  constructor(private componentsService: ComponentsService) {
    this.componentsService.datosConfirmacion$.subscribe(
      data => {
        console.log('Datos de Confirmación recibidos:', data);
        this.datosConfirmacion = data;
      }
    );
}
}

