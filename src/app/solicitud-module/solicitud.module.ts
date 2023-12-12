import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudCrearComponent } from './solicitud-crear/solicitud-crear.component';
import { SolicitudProtectoraComponent } from './solicitud-protectora/solicitud-protectora.component';
import { SolicitudComponent } from './solicitud.component';
import { ModalComponent } from './modal/modal.component';
import { SolicitudDetailModalComponent } from './solicitud-detail-modal/solicitud-detail-modal.component';




@NgModule({
  declarations: [
    SolicitudComponent,
    SolicitudCrearComponent,
    SolicitudProtectoraComponent,
    ModalComponent,
    SolicitudDetailModalComponent
  ],
  imports: [
    BrowserModule,
    SolicitudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

})
export class SolicitudModule { } //esto se cambia

