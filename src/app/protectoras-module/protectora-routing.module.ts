import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { protectoraComponent } from './protectora.component';
import { ProtectorasListarComponent } from './protectoras-listar/protectoras-listar.component';
import { ProtectoraRegistroComponent } from './protectora-registro/protectora-registro.component';


const routes: Routes = [
  {
    path: 'protectora', component: protectoraComponent, children: [
      {path: '', component: protectoraComponent},
      {path: 'protectorasListar', component: ProtectorasListarComponent}, //path -> nombre q le doy
      {path: 'protectorasCrear', component: ProtectoraRegistroComponent},
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProtectoraRoutingModule { }
