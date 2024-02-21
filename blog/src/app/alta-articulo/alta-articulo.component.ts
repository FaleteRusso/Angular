import { Component } from '@angular/core';
import { Articulo } from '../_modelo/articulo';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticuloServicioService } from '../_servicios/articulo-servicio.service';

@Component({
  selector: 'app-alta-articulo',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './alta-articulo.component.html',
  styleUrl: './alta-articulo.component.css'
})
export class AltaArticuloComponent {
  constructor(private articuloServ: ArticuloServicioService){}
articulo:Articulo = new Articulo();

alta():void{
this.articuloServ.altaArticulo(this.articulo);
console.log(this.articuloServ.obtenerTodosArticulos());
}


}




