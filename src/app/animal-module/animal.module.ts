import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; //para los formularios
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { AnimalCrearComponent } from './animal-crear/animal-crear.component';
import { AnimalComponent } from './animal.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalEditarComponent } from './animal-editar/animal-editar.component';
import { AnimalProtectoraComponent } from './animal-protectora/animal-protectora.component';
import { MostrarGatosComponent } from './mostrar-gatos/mostrar-gatos.component';
import { MostrarPerrosComponent } from './mostrar-perros/mostrar-perros.component';
import { MostrarOtrosComponent } from './mostrar-otros/mostrar-otros.component';



@NgModule({
  declarations: [
    AnimalComponent,
    AnimalListarComponent,
    AnimalCrearComponent,
    AnimalDetailComponent,
    AnimalEditarComponent,
    AnimalProtectoraComponent,
    MostrarGatosComponent,
    MostrarPerrosComponent,
    MostrarOtrosComponent
  ],
  imports: [
    BrowserModule,
    AnimalRoutingModule,
    FormsModule
  ],
 
})
export class AnimalModule { }