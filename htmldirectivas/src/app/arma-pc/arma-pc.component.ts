import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arma-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './arma-pc.component.html',
  styleUrl: './arma-pc.component.css'
})
export class ArmaPCComponent {
  tRAM:string = '';
  tamanosRAM:string []=["RAM32", "RAM16", "RAM8"]; 
  procesador:string='';
  procesadores:string[]=["Corei9N8", "Corei8n8Gen", "Corei7N6","AMD"]
  tarjetaGrafica:boolean = false;
  discoDuro:string='';
  discosDuros:string[]=["HDD", "SSD"];
  fuenteAlimentacion:string='';
  fuentesAlimentacion:string[]=["800","600","500"]
  mostrarInfo():void {
    let mensaje:string= `Tamano Ram :${this.tRAM}
    Procesador:${this.procesador}
    Tarjeta Grafica:${this.tarjetaGrafica}
    Discos duros:${this.discoDuro}
   Fuente de alimentación: ${this.fuenteAlimentacion}`;
  alert(mensaje)
  }


}
