import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-ejemplo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './array-ejemplo.component.html',
  styleUrl: './array-ejemplo.component.css'
})
export class ArrayEjemploComponent {
nombres: string[]=["Juan", "Alberto", "Carlos", "Nikita", "Andrea"]
edades:number[]=[22,31,16,13,34]
edadesFiltradas:number[] = [];
edadesDobles:number[] = [];
nombre:string="";
agregar():void{
  this.nombres.push(this.nombre);
}
eliminar():void{
  this.nombres.pop();
}
recorrerArray():void{
this.nombres.forEach(elemento=>console.log(elemento));
}
filtrarArray():void{
  this.edadesFiltradas=this.edades.filter(e=>e>18);
  this.edadesFiltradas.forEach(e=>console.log(e))
}
calcularDoble():void{
this.edadesDobles=this.edades.map(element=>element*2)
this.edadesDobles.forEach(elemento=>console.log(elemento))
}
}
