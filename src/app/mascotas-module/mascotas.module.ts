import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; //para los formularios
import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotasListarComponent } from './mascotas-listar/mascotas-listar.component';
import { MascotasCrearComponent } from './mascotas-crear/mascotas-crear.component';
import { MascotasComponent } from './mascotas.component';



@NgModule({
  declarations: [
    MascotasComponent,
    MascotasListarComponent,
    MascotasCrearComponent
  ],
  imports: [
    BrowserModule,
    MascotasRoutingModule,
    FormsModule
  ],
 
})
export class MascotasModule { }