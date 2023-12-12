import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudusuarioCrearComponent } from './solicitudusuario-crear/solicitudusuario-crear.component';
import { SolicitudUsuarioComponent } from './solicitud-usuario/solicitud-usuario.component'; //para los formularios
import { SolicitudusuarioRoutingModule } from './solicitudusuario-routing.module';


@NgModule({
  declarations: [
    SolicitudusuarioCrearComponent,
    SolicitudUsuarioComponent
  ],
  imports: [
    BrowserModule,
    SolicitudusuarioRoutingModule
  ],

})
export class SolicitudusuarioModule{}
