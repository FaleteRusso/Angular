import { Routes } from '@angular/router';
import { ArmaPCComponent } from './arma-pc/arma-pc.component';
import { ReservabiajeComponent } from './reservabiaje/reservabiaje.component';
import { EmpleadoDinamicoComponent } from './empleado-dinamico/empleado-dinamico.component';

export const routes: Routes = [
    {path: 'arma', component:ArmaPCComponent},
    {path: 'reserva', component:ReservabiajeComponent},
    {path: 'empleado', component:EmpleadoDinamicoComponent}
];
