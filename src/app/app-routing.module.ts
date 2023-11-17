//Aqui ponemos todos los links de la app

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
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
import { RegisterUsuarioComponent } from './register-usuario/register-usuario.component';
import { RegisterProtectoraComponent } from './register-protectora/register-protectora.component';
import { ChatComponent } from './components/chat/chat.component';
import { UsuariosComponent } from './usuarios-module/usuario.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path: '', redirectTo: '/Inicio',pathMatch: 'full'},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Adopcion', component: AdopcionComponent},
  {path: 'Veterinario', component: VeterinariosComponent}, //lo comento porq se duplico con el module nuevo q acabo d crear
  {path: 'Ayudanos', component: QuienesSomosComponent},
  {path: 'Contacta', component: ContactanosComponent},
  {path: 'Login', component: LoginRegistroComponent},
  {path: 'MostrarMascotas', component: MostrarMascotasComponent},
  {path: 'protectoraregistro', component: RegistroProtectoraComponent },
  {path: 'InformacionMascota', component: InformacionMascotaComponent},
  {path: 'Perfil', component: PerfilComponent},



  {path: 'protectoras', component: protectoraComponent},
  {path: 'mascotas', component: MascotasComponent},
  {path: 'vacunas', component: VacunasComponent},
  {path: 'veterinarios', component: VeterinarioComponent},
  {path: 'registerProtectora', component: RegisterProtectoraComponent},
  {path: 'registerUsuario', component: RegisterUsuarioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'chat/:userId', component: ChatComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
