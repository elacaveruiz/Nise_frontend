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


const routes: Routes = [
  {
    path: 'animal', component: AnimalComponent, children: [
      {path: 'animalListar', component: AnimalListarComponent},
      {path: 'animalCrear', component: AnimalCrearComponent},
      {path: 'animalListar/update-animal/:id', component: AnimalEditarComponent},
      {path: 'animalListar/animal-details/:id', component: AnimalDetailComponent},
      {path: 'animalProtectoras', component: AnimalProtectoraComponent},
      {path: 'mostrarPerros', component: MostrarPerrosComponent},
      {path: 'mostrarGatos', component: MostrarGatosComponent},
      {path: 'mostrarOtros', component: MostrarOtrosComponent},
    ]

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { } //esto hay que cambiarlo