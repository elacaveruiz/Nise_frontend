import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { GestionusuarioComponent } from './gestionusuario.component';
import { GestionusuarioListarComponent } from './gestionusuario-listar/gestionusuario-listar.component';
import { GestionusuarioRoutingModule } from './gestionusuario-routing.module';


@NgModule({
  declarations: [
    GestionusuarioComponent,
    GestionusuarioListarComponent,
   
  ],
  imports: [
    BrowserModule,
    GestionusuarioRoutingModule
  ],

})
export class GestionusuarioModule{}//esto se cambia
