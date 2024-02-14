import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() llamadaPadre = new EventEmitter<string>();
  productos: string[] = ["Leche", "Pan", "Café", "Azucar", "Platanos", "Huevos"];

  pasarAPadre(elemento : string){
this.llamadaPadre.emit(elemento);
}
}
