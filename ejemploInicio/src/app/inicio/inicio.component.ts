import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  productos=[
    {"productoID":"1",
  "nombre":"teclado mecanico",
  "descripcion":"teclado Coldfire",
"imagen": "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3a5a63dcd4448eab67d0838723a2e3d8.jpg?imageView2/2/w/800/q/70",
"precio": 30},
{"productoID":"2",
  "nombre":"raton RGB",
  "descripcion":"raton gaming 200DPS",
"imagen": "https://img.kwcdn.com/product/open/2023-12-05/1701765308849-dfea7eb184474ff5b7db856d907c1885-goods.jpeg?imageView2/2/w/800/q/70",
"precio": 21},
{"productoID":"3",
  "nombre":"SSD",
  "descripcion": "SSD 1Tb Kingstone",
"imagen": "https://th.bing.com/th/id/OIP.yR_tF40y48tteTtGVBDy3wHaFD?rs=1&pid=ImgDetMain",
"precio": 150}
  ]

}
