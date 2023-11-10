import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacunasComponent } from './vacuna.component';
import { VacunasListarComponent } from './vacunas-listar/vacunas-listar.component';
import { VacunasCrearComponent } from './vacunas-crear/vacunas-crear.component';
import { VacunasEditarComponent } from './vacunas-editar/vacunas-editar.component';
import { VacunasDetailComponent } from './vacunas-detail/vacunas-detail.component';




const routes: Routes = [
  {
    path: 'vacuna', component: VacunasComponent, children: [
      {path: 'vacunasListar', component: VacunasListarComponent}, //path -> nombre q le doy
      {path: 'vacunasCrear', component: VacunasCrearComponent},
      {path: 'vacunasListar/update-vacuna/:id', component: VacunasEditarComponent},
      {path: 'vacunasListar/vacuna-details/:id', component: VacunasDetailComponent},
    ]

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VacunasRoutingModule { } 