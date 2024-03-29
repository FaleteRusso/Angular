import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticuloServicioService } from '../_servicios/articulo-servicio.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

@Input() id:number = 0;
articulo:any;

  ngOnInit(): void {
    console.log("id recibido-->"+this.id);
    this.articulo=this.artticuloS.obtenerArticulo(this.id-1);
  }
  constructor(private artticuloS:ArticuloServicioService){
  }
  
}

