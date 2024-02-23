import { Component, OnInit } from '@angular/core';
import { Curso, Nivel } from '../_modelo/curso';
import { CursosService } from '../_servicio/cursos.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curso-alta',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './curso-alta.component.html',
  styleUrl: './curso-alta.component.css'
})
export class CursoAltaComponent implements OnInit  {
  niveles=Object.values(Nivel);
  curso: Curso=new Curso(0,"",0,Nivel.INICIACION);
cursos:Curso[] = [];

constructor ( private cursoService: CursosService,
  private route: ActivatedRoute,
  private router: Router){
    this.route.params.subscribe(data => {
      this.curso.id = data['id'];
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.curso.id = data['id'];
    })
  }

  modificarCurso(curso: Curso){
this.cursoService.modificarCurso(curso.id,
  curso.nombre, curso.duracion, curso.nivel)
  this.router.navigate(['/]']);
  }
  altaCurso(){
    console.log("altaCurso");
    this.curso.id = (this.cursos[this.cursos.length -1].id) +1;
    this.cursos.push(this.curso)
  }
  modifAltaCurso(){
    if(this.curso.id== undefined){
      this.altaCurso();
    }else {
      this.modificarCurso(this.curso);
    }
    this.router.navigate(['/]']);
  }



}
