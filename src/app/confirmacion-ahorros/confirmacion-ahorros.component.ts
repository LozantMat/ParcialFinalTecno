// confirmacion-ahorros.component.ts
import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/services/components.service';

@Component({
  selector: 'app-confirmacion-ahorros',
  templateUrl: './confirmacion-ahorros.component.html',
  styleUrls: ['./confirmacion-ahorros.component.css']
})
export class ConfirmacionAhorrosComponent implements OnInit {
  mostrarDatos: any;
  randomNumber: string = '';

  constructor(private componentsService: ComponentsService) {}

  ngOnInit() {
    // Subscribe to form values changes
    this.componentsService.formValues$.subscribe(data => {
      this.mostrarDatos = data;
      // Generate and store a random 10-digit number
      this.randomNumber = this.componentsService.generateRandomNumber();
    });
  }
}


