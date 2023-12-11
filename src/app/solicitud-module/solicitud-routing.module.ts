import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './solicitud.component';
import { SolicitudCrearComponent } from './solicitud-crear/solicitud-crear.component';
import { SolicitudProtectoraComponent } from './solicitud-protectora/solicitud-protectora.component';
import { SolicitudDetailModalComponent } from './solicitud-detail-modal/solicitud-detail-modal.component';




const routes: Routes = [
  {
    path: 'solicituds', component: SolicitudComponent, children: [
      {path: 'solicitud/:id', component: SolicitudCrearComponent},
      {path: 'solicitudProtectora', component: SolicitudProtectoraComponent},
      {path: 'solicitudProtectora/solicitud-details/:id', component: SolicitudDetailModalComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { } //esto hay que cambiarlo
