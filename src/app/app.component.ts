import { Component } from '@angular/core';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tipoCuenta: string=""
  showDetails = false;
  mostrarFormularioConfirmacion = false;

  constructor(private componentsService: ComponentsService) {}

  toggleFormulario() {
    this.mostrarFormularioConfirmacion = !this.mostrarFormularioConfirmacion;
  }
  ngOnInit() {
    this.componentsService.showDetails$.subscribe(value => {
      this.showDetails = value;
    });
  }
}
