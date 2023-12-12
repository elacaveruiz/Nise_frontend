import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionusuarioModule } from './gestionusuario.module';
import { GestionusuarioComponent } from './gestionusuario.component';
import { GestionusuarioListarComponent } from './gestionusuario-listar/gestionusuario-listar.component';



const routes: Routes = [
  {
    path: 'gestionusuario', component: GestionusuarioComponent, children:[
      {path: 'gestionusuarioListar', component: GestionusuarioListarComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GestionusuarioRoutingModule { } 