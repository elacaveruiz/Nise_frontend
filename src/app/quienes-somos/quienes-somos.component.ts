import { Component, OnInit } from '@angular/core';
import { Comentario } from './comentario';
import { QuienesService } from './quienes-somos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuarios-module/usuario.service';
import { Usuario } from '../inicio/usuario';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit{
  Comentarios: Comentario[];
  registroForm: FormGroup;
  username: string;
  usuario: Usuario;
  rol: string = '';

  constructor( private formBuilder: FormBuilder,private QuienesService: QuienesService, private router:Router){}

  ngOnInit(): void {
    this.getComentarios();
    let user = JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;
    this.rol= user.rol;

    this.registroForm= this.formBuilder.group({
      opinion: '',
      usuarioDTO: []
    });

    if(this.username){
      this.QuienesService.getUsuariobyUsername(this.username).subscribe(data =>{
        this.usuario = data;
        this.registroForm.get('usuarioDTO')?.setValue(data);
      });
    }

  }



  private getComentarios(){
    this.QuienesService.getComentariosList().subscribe(data => {
      this.Comentarios = data;
    });
  }

   onSubmit(){
    this.QuienesService.crearcomentario(this.registroForm.value).subscribe(data =>{
      console.log(data);
    });
    window.location.reload();
  }

  public logout(){
    localStorage.clear();
    this.rol = '';
    this.router.navigate(['']);
  }


  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }




}
