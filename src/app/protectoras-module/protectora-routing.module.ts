import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { protectoraComponent } from './protectora.component';
import { ProtectorasListarComponent } from './protectoras-listar/protectoras-listar.component';
import { ProtectorasCrearComponent } from './protectoras-crear/protectoras-crear.component';
import { ProtectorasEditarComponent } from './protectoras-editar/protectoras-editar.component';
import { ProtectorasDetailComponent } from './protectoras-detail/protectoras-detail.component';


const routes: Routes = [
  {
    path: 'protectora', component: protectoraComponent, children: [
      {path: 'protectorasListar', component: ProtectorasListarComponent}, //path -> nombre q le doy
      {path: 'protectorasListar/protectora-details/:id', component: ProtectorasDetailComponent}, //path -> nombre q le doy
      {path: 'protectorasListar/update-protectora/:id', component: ProtectorasEditarComponent}, //path -> nombre q le doy
      {path: 'protectorasCrear', component: ProtectorasCrearComponent},
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProtectoraRoutingModule { }
