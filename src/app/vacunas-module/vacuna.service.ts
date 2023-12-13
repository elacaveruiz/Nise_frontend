import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Vacuna } from './vacuna';

@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  constructor(private httpClient: HttpClient) {}

  private vacunaURL = "http://localhost:8080/vacuna"

  //LISTAR
  getVacunaList(): Observable<Vacuna[]>{
    return this.httpClient.get<Vacuna[]>(`${this.vacunaURL}`);
  }

  //LISTAR ONE BY ONE -- DETAIL
  getVacunaById(id: number): Observable<Vacuna>{
    return this.httpClient.get<Vacuna>(`${this.vacunaURL}/${id}`);
  }

  //CREAR
  createVacuna(vacuna: Vacuna): Observable<Object>{
    return this.httpClient.post(`${this.vacunaURL}`, vacuna);
  }

  //EDITAR
  updateVacuna(id: number, vacuna: Vacuna): Observable<Object>{
    return this.httpClient.put(`${this.vacunaURL}/${id}`, vacuna);
  }

  //BORRAR
  deleteVacuna(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.vacunaURL}/${id}`);
  }

}
