import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { RegistroProtectoraComponent } from './registro-protectora/registro-protectora.component';

const routes: Routes = [
  {path: '', redirectTo: '/Inicio',pathMatch: 'full'},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Adopcion', component: AdopcionComponent},
  {path: 'Veterinario', component: VeterinariosComponent}, 
  {path: 'Quienes_somos', component: QuienesSomosComponent},
  {path: 'Contacta', component: ContactanosComponent},
  {path: 'Login', component: LoginRegistroComponent},
  {path: 'protectoraregistro', component: RegistroProtectoraComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
