import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-detalefactura',
  standalone: true,
  imports: [],
  templateUrl: './detalefactura.component.html',
  styleUrl: './detalefactura.component.css'
})
export class DetalefacturaComponent {
  @Input()productoDetalleFactura:string = '';
  productos:string[]=[];

  agregar():void{
this.productos.push(this.productoDetalleFactura);
  }

}
