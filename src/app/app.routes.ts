import { Routes } from '@angular/router';
import { CineComponent } from './pages/cine/cine.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ReservarComponent } from './pages/reservar/reservar.component';

export const routes: Routes = [

    {path:"cine", component:CineComponent},
    {path:"habitaciones", component:HabitacionesComponent},
    {path:"reserva", component:ReservarComponent},

];
