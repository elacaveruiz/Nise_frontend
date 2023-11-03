import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './mascotas.component';




const routes: Routes = [
  {
    path: 'mascotas', component: MascotasComponent, children: []

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { } //esto hay que cambiarlo