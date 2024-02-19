import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DetalleInmobiliariaComponent } from './detalle-inmobiliaria/detalle-inmobiliaria.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,DetalleInmobiliariaComponent,InmobiliariaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modeloInmobiliaria';
}
