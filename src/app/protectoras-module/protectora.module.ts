import { NgModule } from '@angular/core';
import { ProtectoraRoutingModule } from './protectora-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { protectoraComponent } from './protectora.component';
import { ProtectorasListarComponent } from './protectoras-listar/protectoras-listar.component';
import { ProtectorasCrearComponent } from './protectoras-crear/protectoras-crear.component';
import { ProtectorasEditarComponent } from './protectoras-editar/protectoras-editar.component';
import { ProtectorasDetailComponent } from './protectoras-detail/protectoras-detail.component';
import { FormsModule } from '@angular/forms'; //para los formularios


@NgModule({
  declarations: [
    protectoraComponent,
    ProtectorasListarComponent,
    ProtectorasCrearComponent,
    ProtectorasEditarComponent,
    ProtectorasDetailComponent,
  ],
  imports: [
    BrowserModule,
    ProtectoraRoutingModule,
    FormsModule
  ],
  
})
export class ProtectoraModule { }