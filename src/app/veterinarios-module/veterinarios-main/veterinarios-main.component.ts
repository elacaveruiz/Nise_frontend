import { Component } from '@angular/core';
import { VeterinarioService } from '../veterinario.service';
import { Veterinario } from '../veterinario';

import { Usuario } from 'src/app/inicio/usuario';
import { UsuarioService } from 'src/app/usuarios-module/usuario.service';
import { Protectora } from 'src/app/inicio/protectora';
import { AnimalService } from 'src/app/animal-module/animal.service';
import { Animal } from 'src/app/animal-module/animal';
import { Router } from '@angular/router';
import { LoginUsuarioService } from 'src/app/login-registro/login-registro.service';

@Component({
  selector: 'app-veterinarios-main',
  templateUrl: './veterinarios-main.component.html',
  styleUrls: ['./veterinarios-main.component.css']
})
export class VeterinariosMainComponent {

  veterinarios: Veterinario[] //este es el nombre que uso en mi variable del bucle (protectoras-listar.component.html)
  rol : any = '';
  username: string;
  usuarios: Usuario;
  protectoras: Protectora;
  id: number;

  constructor( private router :Router, private LoginUsuarioService: LoginUsuarioService, private UsuarioService: UsuarioService,
    private AnimalService: AnimalService,private veterinarioService: VeterinarioService){}
  ngOnInit() {

    this.veterinarioService.getVeterinarioList().subscribe(data => {
    this.veterinarios = data;
    })


     let user = JSON.parse(localStorage.getItem('dato')!);
     this.username = user.username;
     this.rol= user.rol;


     if(this.rol === 'PROTECTORA'){
      this.protectoraPerfil();
     }
  }

  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }


  public logout(){
    localStorage.clear();
    this.rol = '';
    this.router.navigate(['']);
  }

  private protectoraPerfil(){
    this.UsuarioService.getProtectoraUsername(this.username)
    .subscribe(data => {
      this.protectoras = data;
      this.id = data.id;
      localStorage.setItem('id', JSON.stringify(data.id));
      })
    }

}
