import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { ArrayEjemploComponent } from './array-ejemplo/array-ejemplo.component';
import { FormaPagoComponent } from './forma-pago/forma-pago.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PadreComponent,HijoComponent,ArrayEjemploComponent,FormaPagoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos5hijopadre';
}
