import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Protectora } from './protectora';

@Injectable({
  providedIn: 'root'
})
export class ProtectoraService {

  private protectoraURL = "http://localhost:8080/protectora"

  constructor(private httpClient: HttpClient) {}

  //LISTAR PROTECTORAS
  getProtectoraList(): Observable<Protectora[]>{
    return this.httpClient.get<Protectora[]>(`${this.protectoraURL}`)
  }

  //LISTAR ONE BY ONE -- DETAIL
  getProtectoraById(id: number): Observable<Protectora>{
    return this.httpClient.get<Protectora>(`${this.protectoraURL}/id/${id}`);
  }

  //CREAR
  createProtectora(protectora: Protectora): Observable<Object>{
    return this.httpClient.post(`${this.protectoraURL}`, protectora);
  }

  //EDITAR
  updateProtectora(id: number, protectora: Protectora): Observable<Object>{
    return this.httpClient.put(`${this.protectoraURL}/${id}`, protectora);
  }

  //ELIMINAR
  deleteProtectora(id: number): Observable<any>{
    return this.httpClient.delete(`${this.protectoraURL}/${id}`);
  }

  getProtectoraByAnimalId(animalId: number): Observable<any>{
    return this.httpClient.get(`http://localhost:8080/animal/${animalId}/protectora`);
  }

}
