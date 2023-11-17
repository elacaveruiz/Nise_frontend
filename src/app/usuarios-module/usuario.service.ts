import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  private usuarioURL= "http://localhost:8080/usuario"

  //LISTAR
  getUsuarioList(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.usuarioURL}`);
  }


  //LISTAR ONE BY ONE -- DETAIL
  getUsuarioById(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usuarioURL}/${id}`);
  }

}
