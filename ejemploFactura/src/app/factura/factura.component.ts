import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetalefacturaComponent } from '../detalefactura/detalefactura.component';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [FormsModule,DetalefacturaComponent],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  codigoCliente:number = 0;
  formaPago:string = '';
  direccion:string = '';
  producto:string = '';

}
