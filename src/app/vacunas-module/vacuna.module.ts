import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { VacunasRoutingModule } from './vacuna-routing.module';
import { VacunasListarComponent } from './vacunas-listar/vacunas-listar.component';
import { VacunasComponent } from './vacuna.component';
import { VacunasCrearComponent } from './vacunas-crear/vacunas-crear.component';
import { VacunasEditarComponent } from './vacunas-editar/vacunas-editar.component';
import { VacunasEliminarComponent } from './vacunas-eliminar/vacunas-eliminar.component';
import { VacunasDetailComponent } from './vacunas-detail/vacunas-detail.component';




@NgModule({
  declarations: [
    VacunasComponent,
    VacunasListarComponent,
    VacunasCrearComponent,
    VacunasEditarComponent,
    VacunasEliminarComponent,
    VacunasDetailComponent
  ],
  imports: [
    BrowserModule,
    VacunasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
 
})
export class VacunaModule { } //esto se cambia
