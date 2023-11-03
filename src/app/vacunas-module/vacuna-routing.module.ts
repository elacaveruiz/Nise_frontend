import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacunasComponent } from './vacuna.component';
import { VacunasListarComponent } from './vacunas-listar/vacunas-listar.component';
import { VacunasCrearComponent } from './vacunas-crear/vacunas-crear.component';




const routes: Routes = [
  {
    path: 'vacuna', component: VacunasComponent, children: [
      {path: 'vacunasListar', component: VacunasListarComponent}, //path -> nombre q le doy
      {path: 'vacunasCrear', component: VacunasCrearComponent},
    ]

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VacunasRoutingModule { } 