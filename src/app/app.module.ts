import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { MostrarMascotasComponent } from './mostrar-mascotas/mostrar-mascotas.component';
import { InformacionMascotaComponent } from './informacion-mascota/informacion-mascota.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { RegistroProtectoraComponent } from './registro-protectora/registro-protectora.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    AdopcionComponent,
    MostrarMascotasComponent,
    InformacionMascotaComponent,
    VeterinariosComponent,
    QuienesSomosComponent,
    ContactanosComponent,
    LoginRegistroComponent,
    RegistroProtectoraComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }