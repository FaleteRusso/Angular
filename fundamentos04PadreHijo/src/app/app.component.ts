import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HijoComponent,PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos04PadreHijo';
}
