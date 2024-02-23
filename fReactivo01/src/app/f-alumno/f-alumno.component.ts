import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from '../_servicio/alumnos.service';
import { Alumno } from '../_modelo/alumno';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-f-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './f-alumno.component.html',
  styleUrl: './f-alumno.component.css'
})
export class FAlumnoComponent implements OnInit {

form:FormGroup;
empt_alumno!: Alumno;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private alumnnosServicio: AlumnosService){
    this.form = new FormGroup(
      {id:new FormControl(0),
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      horasFormacion: new FormControl(''),
      mayorDeEdades: new FormControl(false)
      }
    );
  }
ngOnInit(): void {
   this.route.params.subscribe((data)=> 
   {
    this.alumnnosServicio.buscarAlumno(data['id']).subscribe(
      (data)=>{
        this.empt_alumno=data;
        this.form = new FormGroup({
          id:new FormControl(this.empt_alumno.id),
      nombre: new FormControl(this.empt_alumno.nombre),
      apellidos: new FormControl(this.empt_alumno.apellidos),
      horasFormacion: new FormControl(this.empt_alumno.horasFormacion),
      mayorDeEdades: new FormControl(this.empt_alumno.mayorDeEdad)
      });
   });
  });
  }

  mostrarDatos(){
    let alumno: Alumno={
      id: this.form.value.id,
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      horasFormacion: this.form.value.horasFormacion,
      mayorDeEdad: this.form.value.mayorDeEdad
    };
    console.log(this.form.value);
  }
  addModAlumno(){
    let alumno: Alumno ={
      id: this.form.value.id,
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      horasFormacion: this.form.value.horasFormacion,
      mayorDeEdad: this.form.value.mayorDeEdad
    };
    if(alumno.id ==0){
      this.alumnnosServicio.addAlumno(alumno);
    }else{
      this.alumnnosServicio.modificarAlumno(alumno);
    }
    this.router.navigate(['/']);
      }
  
    }

