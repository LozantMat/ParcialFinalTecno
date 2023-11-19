import { ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-confirmacion-ahorros',
  templateUrl: './confirmacion-ahorros.component.html',
  styleUrls: ['./confirmacion-ahorros.component.css']
})
export class ConfirmacionAhorrosComponent implements OnInit{
  @Input() datosConfirmacion: any;

  constructor(private componentsService: ComponentsService, private cdr: ChangeDetectorRef) {

}
ngOnInit() {
  this.componentsService.datosConfirmacion$.subscribe(
    data => {
      console.log('Datos de Confirmación recibidos:', data);
      this.datosConfirmacion = data;
      this.cdr.detectChanges
    }
  );
}
}

