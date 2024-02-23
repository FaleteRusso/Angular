export class Curso{
     id: number=0;
     nombre: string="";
     duracion: number=0;
     nivel: Nivel= Nivel.INICIACION;

   constructor(id: number, nombre: string, duracion: number, nivel: Nivel) {
this.id = id;
this.nombre = nombre;
this.duracion = duracion;
this.nivel = nivel;
    }
}
        export enum Nivel{
            INICIACION = 'iniciacion',
            INTERMEDIO = 'Intermedio',
            AVANZADO = 'Avanzado'
        }
