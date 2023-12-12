import { Component, ElementRef, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuarioService } from '../login-registro/login-registro.service';


import { Usuario } from './usuario';
import { UsuarioService } from '../usuarios-module/usuario.service';
import { Protectora } from './protectora';
import { AnimalService } from '../animal-module/animal.service';
import { Animal } from '../animal-module/animal';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  rol : any = '';
  username: string;
  usuarios: Usuario;
  protectoras: Protectora;
  animal: Animal[];
  id: number;

  constructor( private router :Router, private LoginUsuarioService: LoginUsuarioService, private UsuarioService: UsuarioService,
    private AnimalService: AnimalService){}
  ngOnInit() {
     this.animales();
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

  private animales(){
    this.AnimalService.getAnimalesList().subscribe(data => {
    this.animal = data;
    console.log(data);
    })
  }


}
