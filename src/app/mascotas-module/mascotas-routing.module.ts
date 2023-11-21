import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './mascotas.component';
import { MascotasListarComponent } from './mascotas-listar/mascotas-listar.component';
import { MascotasCrearComponent } from './mascotas-crear/mascotas-crear.component';
import { MascotasEditarComponent } from './mascotas-editar/mascotas-editar.component';
import { MascotasDetailComponent } from './mascotas-detail/mascotas-detail.component';
import { MascotasProtectoraComponent } from './mascotas-protectora/mascotas-protectora.component';
import { MostrarGatosComponent } from './mostrar-gatos/mostrar-gatos.component';
import { MostrarPerrosComponent } from './mostrar-perros/mostrar-perros.component';
import { MostrarOtrosComponent } from './mostrar-otros/mostrar-otros.component';


const routes: Routes = [
  {
    path: 'mascotas', component: MascotasComponent, children: [
      {path: 'mascotasListar', component: MascotasListarComponent},
      {path: 'mascotasCrear', component: MascotasCrearComponent},
      {path: 'mascotasProtectora', component: MascotasProtectoraComponent},
      {path: 'mascotasListar/update-mascota/:id', component: MascotasEditarComponent},
      {path: 'mascotasListar/mascota-details/:id', component: MascotasDetailComponent},

      {path: 'mostrarGatos', component: MostrarGatosComponent},
      {path: 'mostrarPerros', component: MostrarPerrosComponent},
      {path: 'mostrarOtros', component: MostrarOtrosComponent},
    ]

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { } //esto hay que cambiarlo
