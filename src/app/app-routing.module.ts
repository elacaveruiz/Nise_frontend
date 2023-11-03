import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
// import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { MostrarMascotasComponent } from './mostrar-mascotas/mostrar-mascotas.component';
import { RegistroProtectoraComponent } from './registro-protectora/registro-protectora.component';
import { InformacionMascotaComponent } from './informacion-mascota/informacion-mascota.component';
import { protectoraComponent } from './protectoras-module/protectora.component';
import { MascotasComponent } from './mascotas-module/mascotas.component';
import { VacunasComponent } from './vacunas-module/vacuna.component';
import { VeterinarioComponent } from './veterinarios-module/veterinario.component';

const routes: Routes = [
  {path: '', redirectTo: '/Inicio',pathMatch: 'full'},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Adopcion', component: AdopcionComponent},
  // {path: 'Veterinario', component: VeterinariosComponent}, //lo comento porq se duplico con el module nuevo q acabo d crear
  {path: 'Quienes_somos', component: QuienesSomosComponent},
  {path: 'Contacta', component: ContactanosComponent},
  {path: 'Login', component: LoginRegistroComponent},
  {path: 'MostrarMascotas', component: MostrarMascotasComponent},
  {path: 'protectoraregistro', component: RegistroProtectoraComponent },
  {path: 'InformacionMascota', component: InformacionMascotaComponent},



  {path: 'protectoras', component: protectoraComponent},
  {path: 'mascotas', component: MascotasComponent},
  {path: 'vacunas', component: VacunasComponent},
  {path: 'veterinarios', component: VeterinarioComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
