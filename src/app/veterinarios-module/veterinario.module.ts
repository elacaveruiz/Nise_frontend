import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; //para los formularios
import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { VeterinariosListarComponent } from './veterinarios-listar/veterinarios-listar.component';
import { VeterinariosCrearComponent } from './veterinarios-crear/veterinarios-crear.component';
import { VeterinarioComponent } from './veterinario.component';




@NgModule({
  declarations: [
    VeterinarioComponent,
    VeterinariosListarComponent,
    VeterinariosCrearComponent
  ],
  imports: [
    BrowserModule,
    VeterinarioRoutingModule,
    FormsModule
  ],
 
})
export class VeterinarioModule { } //esto se cambia