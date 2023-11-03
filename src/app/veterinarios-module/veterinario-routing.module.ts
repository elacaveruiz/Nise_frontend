import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterinarioComponent } from './veterinario.component';




const routes: Routes = [
  {
    path: 'mascotas', component: VeterinarioComponent, children: []
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VeterinarioRoutingModule { } //esto hay que cambiarlo