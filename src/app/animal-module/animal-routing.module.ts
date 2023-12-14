import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { AnimalCrearComponent } from './animal-crear/animal-crear.component';
import { AnimalEditarComponent } from './animal-editar/animal-editar.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalProtectoraComponent } from './animal-protectora/animal-protectora.component';
import { MostrarPerrosComponent } from './mostrar-perros/mostrar-perros.component';
import { MostrarGatosComponent } from './mostrar-gatos/mostrar-gatos.component';
import { MostrarOtrosComponent } from './mostrar-otros/mostrar-otros.component';
import { MostrarPerrosDetailComponent } from './mostrar-perros-detail/mostrar-perros-detail.component';
import { MostrarGatosDetailComponent } from './mostrar-gatos-detail/mostrar-gatos-detail.component';
import { MostrarOtrosDetailComponent } from './mostrar-otros-detail/mostrar-otros-detail.component';


const routes: Routes = [
  {
    path: 'animal', component: AnimalComponent, children: [
      {path: 'animalListar', component: AnimalListarComponent},
      {path: 'animalProtectoras/animalCrear', component: AnimalCrearComponent},
      {path: 'animalListar/update-animal/:id', component: AnimalEditarComponent},
      {path: 'animalListar/animal-details/:id', component: AnimalDetailComponent},
      {path: 'animalProtectoras', component: AnimalProtectoraComponent},
      {path: 'animalProtectoras/update-animal/:id', component: AnimalEditarComponent},
      {path: 'animalProtectoras/animal-details/:id', component: AnimalDetailComponent},
      {path: 'mostrarPerros', component: MostrarPerrosComponent},
      {path: 'mostrarPerros/:id', component: MostrarPerrosDetailComponent},
      {path: 'mostrarGatos', component: MostrarGatosComponent},
      {path: 'mostrarGatos/:id', component: MostrarGatosDetailComponent},
      {path: 'mostrarOtros', component: MostrarOtrosComponent},
      {path: 'mostrarOtros/:id', component: MostrarOtrosDetailComponent},
    ]

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { } //esto hay que cambiarlo
