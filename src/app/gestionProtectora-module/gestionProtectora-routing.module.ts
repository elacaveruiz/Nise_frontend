import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gestionProtectoraComponent } from './gestionProtectora.component';
import { GestionProtectorasListarComponent } from './gestion-protectoras-listar/gestion-protectoras-listar.component';




const routes: Routes = [
  {
    path: 'gestionProtectora', component: gestionProtectoraComponent, children: [
      {path: 'gestionProtectorasListar', component: GestionProtectorasListarComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GestionProtectoraRoutingModule { } //esto hay que cambiarlo
