import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascotas } from './mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private mascotasURL: string;

  constructor(private http: HttpClient) { 
    this.mascotasURL = 'http://localhost:8080/animal'
  }

  //LISTAR
  public findAll(): Observable<Mascotas[]> {
    return this.http.get<Mascotas[]>(this.mascotasURL);
  }


  //CREAR
  public save(mascotas: Mascotas) {
    return this.http.post<Mascotas>(this.mascotasURL, mascotas);
  }
}
