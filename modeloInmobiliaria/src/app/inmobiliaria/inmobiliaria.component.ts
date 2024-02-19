import { Component } from '@angular/core';

@Component({
  selector: 'app-inmobiliaria',
  standalone: true,
  imports: [],
  templateUrl: './inmobiliaria.component.html',
  styleUrl: './inmobiliaria.component.css'
})
export class InmobiliariaComponent {
  referencias=[
    {"referencia":"1",
 "imagen": "https://i.etsystatic.com/33232050/r/il/beec6f/3525638392/il_794xN.3525638392_qtc1.jpg",
"descripcion":"Vivienda unifamiliar de 200m2 en 2 alturas" },
{"referencia":"2",
 "imagen": "https://www.grupoinorsa.com/wp-content/uploads/2018/07/vega-del-jarama5.jpg",
"descripcion":"2º piso interior en residencial privado" },
{"referencia":"3",
 "imagen": "https://www.diariodearganda.es/wp-content/uploads/2020/02/Paris1.jpg",
"descripcion":"Atico con vistas a la dehesa en Arganda del rey" }
  ]

}
