import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-calculadora-divisas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-divisas.component.html',
  styleUrl: './calculadora-divisas.component.css'
})
export class CalculadoraDivisasComponent {
cantidad: number =0;
resultado: number=0;
tasaCambio: number=1.08;

convertirADolar() {
  this.resultado = this.cantidad * this.tasaCambio;
}
}

