import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from './veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  constructor(private httpClient: HttpClient) {}

  private veterinarioURL = "http://localhost:8080/veterinario"

  //LISTAR
  getVeterinarioList(): Observable<Veterinario[]>{
    return this.httpClient.get<Veterinario[]>(`${this.veterinarioURL}`);
  }

  //LISTAR ONE BY ONE -- DETAIL
  getVeterinarioById(id: number): Observable<Veterinario>{
    return this.httpClient.get<Veterinario>(`${this.veterinarioURL}/${id}`);
  }

  //CREAR
  createVeterinario(veterinario: Veterinario): Observable<Object>{
    return this.httpClient.post(`${this.veterinarioURL}`, veterinario);
  }

  //EDITAR
  updateVeterinario(id: number, veterinario: Veterinario): Observable<Object>{
    return this.httpClient.put(`${this.veterinarioURL}/${id}`, veterinario);
  }


  //BORRAR
  deleteVeterinario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.veterinarioURL}/${id}`);
  }


}
