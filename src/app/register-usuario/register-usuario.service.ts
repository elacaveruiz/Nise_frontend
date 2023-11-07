import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUsuario } from './register-usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterUsuarioService {

  private registerUsuarioURL: string;

  constructor(private http: HttpClient) { 
    this.registerUsuarioURL= 'http://localhost:8080/register_usuario';
  }


  //CREAR
  public save(registerUsuario: RegisterUsuario){
    return this.http.post<RegisterUsuario>(this.registerUsuarioURL, registerUsuario);
  }

}
