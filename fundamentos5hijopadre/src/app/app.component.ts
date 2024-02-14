import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { Padre2Component } from './padre2/padre2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PadreComponent,HijoComponent, Hijo2Component, Padre2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos5hijopadre';
}
