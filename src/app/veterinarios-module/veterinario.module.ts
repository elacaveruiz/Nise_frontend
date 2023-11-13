import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { VeterinariosListarComponent } from './veterinarios-listar/veterinarios-listar.component';
import { VeterinariosCrearComponent } from './veterinarios-crear/veterinarios-crear.component';
import { VeterinarioComponent } from './veterinario.component';
import { VeterinariosMainComponent } from './veterinarios-main/veterinarios-main.component';
import { VeterinariosEditarComponent } from './veterinarios-editar/veterinarios-editar.component';
import { VeterinariosEliminarComponent } from './veterinarios-eliminar/veterinarios-eliminar.component';
import { VeterinariosDetailComponent } from './veterinarios-detail/veterinarios-detail.component';


@NgModule({
  declarations: [
    VeterinarioComponent,
    VeterinariosListarComponent,
    VeterinariosCrearComponent,
    VeterinariosMainComponent,
    VeterinariosEditarComponent,
    VeterinariosEliminarComponent,
    VeterinariosDetailComponent
  ],
  imports: [
    BrowserModule,
    VeterinarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    VeterinariosMainComponent,
  ]
})
export class VeterinarioModule{}//esto se cambia
