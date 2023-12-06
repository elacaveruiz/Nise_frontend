import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './solicitud.component';
import { SolicitudCrearComponent } from './solicitud-crear/solicitud-crear.component';




const routes: Routes = [
  {
    path: 'solicituds', component: SolicitudComponent, children: [
      {path: 'solicitud/:id', component: SolicitudCrearComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { } //esto hay que cambiarlo
