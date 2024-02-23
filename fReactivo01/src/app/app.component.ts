import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FAlumnoComponent } from './f-alumno/f-alumno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FAlumnoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fReactivo01';
}
