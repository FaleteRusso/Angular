import { Routes } from '@angular/router';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { DetalleInmobiliariaComponent } from './detalle-inmobiliaria/detalle-inmobiliaria.component';

export const routes: Routes = [
    {path: 'inmobiliaria', component:InmobiliariaComponent},
    {path: 'detalle', component:DetalleInmobiliariaComponent}
];
