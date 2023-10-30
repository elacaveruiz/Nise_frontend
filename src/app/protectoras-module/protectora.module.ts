import { NgModule } from '@angular/core';
import { ProtectoraRoutingModule } from './protectora-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { protectoraComponent } from './protectora.component';
import { ProtectorasListarComponent } from './protectoras-listar/protectoras-listar.component';
import { ProtectoraRegistroComponent } from './protectora-registro/protectora-registro.component';
import { FormsModule } from '@angular/forms'; //para los formularios


@NgModule({
  declarations: [
    protectoraComponent,
    ProtectorasListarComponent,
    ProtectoraRegistroComponent
  ],
  imports: [
    BrowserModule,
    ProtectoraRoutingModule,
    FormsModule
  ],
  
})
export class ProtectoraModule { }