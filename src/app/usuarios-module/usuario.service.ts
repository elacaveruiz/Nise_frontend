import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Protectora } from './protectora';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  private usuarioURL= "http://localhost:8080/usuario";
  private usernamesURL= "http://localhost:8080/usuario/username";
  private usernamesProtectorasURL= "http://localhost:8080/protectora/username";
  //LISTAR
  getUsuarioList(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.usuarioURL}`);
  }


  //LISTAR ONE BY ONE -- DETAIL
  getUsuarioById(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usuarioURL}/${id}`);
  }


  getUsuariobyUsername(username: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usernamesURL}/${username}`);
  }

  getProtectoraUsername(username: string): Observable<Protectora>{
    return this.httpClient.get<Protectora>(`${this.usernamesProtectorasURL}/${username}`);
  }

}
