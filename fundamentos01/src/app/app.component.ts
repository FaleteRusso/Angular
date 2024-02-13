import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos01';
  registro = {
    nombreUsuario: "",
    dni:"",
    direccion: '',
    contrasena: '',
  };

  submitRegistro() {
    console.log('Datos de registro:', this.registro);
    // Aquí puedes agregar lógica para enviar los datos del formulario al servidor
  }
}
