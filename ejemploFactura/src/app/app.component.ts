import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetalefacturaComponent } from './detalefactura/detalefactura.component';
import { FacturaComponent } from './factura/factura.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DetalefacturaComponent,FacturaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemploFactura';
}
