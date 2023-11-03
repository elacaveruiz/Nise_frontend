import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; //para los formularios
import { VacunasRoutingModule } from './vacuna-routing.module';
import { VacunasListarComponent } from './vacunas-listar/vacunas-listar.component';
import { VacunasComponent } from './vacuna.component';
import { VacunasCrearComponent } from './vacunas-crear/vacunas-crear.component';




@NgModule({
  declarations: [
    VacunasComponent,
    VacunasListarComponent,
    VacunasCrearComponent
  ],
  imports: [
    BrowserModule,
    VacunasRoutingModule,
    FormsModule
  ],
 
})
export class VacunaModule { } //esto se cambia
