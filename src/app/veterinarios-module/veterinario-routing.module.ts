import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterinarioComponent } from './veterinario.component';
import { VeterinariosListarComponent } from './veterinarios-listar/veterinarios-listar.component'; 
import { VeterinariosCrearComponent } from './veterinarios-crear/veterinarios-crear.component';




const routes: Routes = [
  {
    path: 'veterinarios', component: VeterinarioComponent, children: [
      {path: 'veterinariosListar', component: VeterinariosListarComponent}, //path -> nombre q le doy
      {path: 'veterinariosCrear', component: VeterinariosCrearComponent},
   
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VeterinarioRoutingModule { } //esto hay que cambiarlo