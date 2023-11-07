import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; //para los formularios
import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { VeterinariosListarComponent } from './veterinarios-listar/veterinarios-listar.component';
import { VeterinariosCrearComponent } from './veterinarios-crear/veterinarios-crear.component';
import { VeterinarioComponent } from './veterinario.component';
import { VeterinariosMainComponent } from './veterinarios-main/veterinarios-main.component';




@NgModule({
  declarations: [
    VeterinarioComponent,
    VeterinariosListarComponent,
    VeterinariosCrearComponent,
    VeterinariosMainComponent,
  ],
  imports: [
    BrowserModule,
    VeterinarioRoutingModule,
    FormsModule,
  ],
  exports: [
    VeterinariosMainComponent,
  ]
})
export class VeterinarioModule { } //esto se cambia
