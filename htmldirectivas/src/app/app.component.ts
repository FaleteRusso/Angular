import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmpleadoDinamicoComponent } from './empleado-dinamico/empleado-dinamico.component';
import { ArmaPCComponent } from './arma-pc/arma-pc.component';
import { ReservabiajeComponent } from './reservabiaje/reservabiaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoDinamicoComponent, ArmaPCComponent,ReservabiajeComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'htmldirectivas';
}
