import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUsuario } from './register-usuario';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterUsuarioService {

  private registerUsuarioURL: string;

  constructor(private http: HttpClient, private router : Router) { 
    this.registerUsuarioURL= 'http://localhost:8080/register_usuario';
  }


  //CREAR
  public save(registerUsuario: RegisterUsuario){
    this.router.navigate(['/Inicio']);
    return this.http.post<RegisterUsuario>(this.registerUsuarioURL, registerUsuario);
  }

}
