import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ArticuloServicioService } from '../_servicios/articulo-servicio.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule,RouterOutlet,RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

articulos: any;

  constructor(private articuloS:ArticuloServicioService){}
  ngOnInit(): void {
    this.articulos=this.articuloS.obtenerTodosArticulos();
  }

}
