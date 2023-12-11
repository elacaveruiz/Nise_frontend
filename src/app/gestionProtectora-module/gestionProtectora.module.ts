import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; //para los formularios
import { GestionProtectoraRoutingModule } from './gestionProtectora-routing.module';
import { GestionProtectorasListarComponent } from './gestion-protectoras-listar/gestion-protectoras-listar.component';
import { gestionProtectoraComponent } from './gestionProtectora.component';




@NgModule({
  declarations: [
    gestionProtectoraComponent,
    GestionProtectorasListarComponent
  ],
  imports: [
    BrowserModule,
    GestionProtectoraRoutingModule,
    FormsModule
  ],

})
export class GestionProtectoraModule { } //esto se cambia
