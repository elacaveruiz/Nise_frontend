import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';
import { Usuario } from '../inicio/usuario';


@Injectable({
  providedIn: 'root'
})
export class QuienesService {

  constructor(private httpClient: HttpClient) { }

  private comentarioURL= "http://localhost:8080/comentario/listar";
  private usuarioURL= "http://localhost:8080/usuario/username";
  private comentarioCrear= "http://localhost:8080/comentario/crear";
 
  getComentariosList(): Observable<Comentario[]>{
    return this.httpClient.get<Comentario[]>(`${this.comentarioURL}`);
  }
  getUsuariobyUsername(username: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usuarioURL}/${username}`);
  }

  public crearcomentario(Comentario: Comentario){
    return this.httpClient.post<Comentario>(this.comentarioCrear, Comentario);
  }
}
