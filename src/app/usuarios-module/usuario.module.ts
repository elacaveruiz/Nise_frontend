import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; //para los formularios
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuariosListarComponent } from './usuarios-listar/usuarios-listar.component';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';
import { UsuariosComponent } from './usuario.component';




@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosListarComponent,
    UsuariosDetailComponent
  ],
  imports: [
    BrowserModule,
    UsuarioRoutingModule,
    FormsModule
  ],
 
})
export class UsuarioModule { } //esto se cambia