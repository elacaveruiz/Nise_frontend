import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterinarioComponent } from './veterinario.component';
import { VeterinariosListarComponent } from './veterinarios-listar/veterinarios-listar.component'; 
import { VeterinariosCrearComponent } from './veterinarios-crear/veterinarios-crear.component';
import { VeterinariosEditarComponent } from './veterinarios-editar/veterinarios-editar.component';
import { VeterinariosDetailComponent } from './veterinarios-detail/veterinarios-detail.component';
import { VeterinariosComponent } from '../veterinarios/veterinarios.component';


const routes: Routes = [
  {
    path: 'veterinarios', component: VeterinarioComponent, children: [
      {path: 'veterinariosListar', component: VeterinariosListarComponent}, //path -> nombre q le doy
      {path: 'veterinariosCrear', component: VeterinariosCrearComponent},
      {path: 'veterinariosListar/update-veterinario/:id', component: VeterinariosEditarComponent},
      {path: 'veterinario-details/:id', component: VeterinariosEditarComponent},
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VeterinarioRoutingModule { } 