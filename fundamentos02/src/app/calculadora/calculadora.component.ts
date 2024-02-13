import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero1:number = 0;
  numero2:number = 0;
  resultado: number=0;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }
  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(): void {
    this.resultado = this.numero1 / this.numero2;
  }
}
