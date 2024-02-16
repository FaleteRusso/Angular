import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservabiaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservabiaje.component.html',
  styleUrl: './reservabiaje.component.css'
})
export class ReservabiajeComponent {
cOrigen: string='';
cDestino: string='';
ciudades: string[]=["Madrid", "Murcia", "Oviedo", "Toledo"];
fechaIda:any
fechaVuelta:any
numPasajero: number = 0
mostrarInfo():void {
  let mensaje:string= `Ciudad de origen :${this.cOrigen}
  Ciudad de destino:${this.cDestino}
  Fecha de ida:${this.fechaIda}
  Fecha de vuelta:${this.fechaVuelta}
Numero de pasajeros: ${this.numPasajero}`;
alert(mensaje)
}
}
