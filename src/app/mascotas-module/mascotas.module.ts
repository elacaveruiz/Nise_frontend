import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; //para los formularios
import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotasListarComponent } from './mascotas-listar/mascotas-listar.component';
import { MascotasCrearComponent } from './mascotas-crear/mascotas-crear.component';
import { MascotasComponent } from './mascotas.component';
import { MascotasDetailComponent } from './mascotas-detail/mascotas-detail.component';
import { MascotasEditarComponent } from './mascotas-editar/mascotas-editar.component';
import { MostrarGatosComponent } from './mostrar-gatos/mostrar-gatos.component';
import { MostrarOtrosComponent } from './mostrar-otros/mostrar-otros.component';
import { MostrarPerrosComponent } from './mostrar-perros/mostrar-perros.component';



@NgModule({
  declarations: [
    MascotasComponent,
    MascotasListarComponent,
    MascotasCrearComponent,
    MascotasDetailComponent,
    MascotasEditarComponent,
    MostrarGatosComponent,
    MostrarOtrosComponent,
    MostrarPerrosComponent
  ],
  imports: [
    BrowserModule,
    MascotasRoutingModule,
    FormsModule
  ],
  exports: [
    MascotasListarComponent,
  ]

})
export class MascotasModule { }
