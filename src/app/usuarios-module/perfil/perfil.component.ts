import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Usuariodatos } from '../usuariodatos'; 
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Protectora } from '../protectora';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  rol: any;
  username: string;
  usuarios: Usuario;
  protectoras: Protectora;
  usuariodatos: Usuariodatos;

  constructor(private usuarioService: UsuarioService,
    private router: Router){}

  ngOnInit(): void {
   const user = JSON.parse(localStorage.getItem('dato')!);
   this.username = user.username;
   this.rol= user.rol;

   if(this.rol === 'USUARIO' || this.rol === 'ADMIN'){
    this.perfil();
   }else{
    this.protectoraPerfil();
   } 
   
  }

 private perfil(){
    this.usuarioService.getUsuariobyUsername(this.username)
    .subscribe(data => {
      this.usuarios = data;
     // this.usuariodatos= data;
    })
 }
 private protectoraPerfil(){
  this.usuarioService.getProtectoraUsername(this.username)
  .subscribe(data => {
    this.protectoras = data;
  })
}


}
