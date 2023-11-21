import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from './mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private httpClient: HttpClient) {}

  private mascotaURL= "http://localhost:8080/animal"

  //LISTAR
  getMascotaList(): Observable<Mascota[]>{
    return this.httpClient.get<Mascota[]>(`${this.mascotaURL}`);
  }

  //LISTAR ONE BY ONE -- DETAIL
  getMascotaById(id: number): Observable<Mascota>{
    return this.httpClient.get<Mascota>(`${this.mascotaURL}/${id}`);
  }

  //CREAR
  createMascota(mascota: Mascota): Observable<Object>{
    return this.httpClient.post(`${this.mascotaURL}`, mascota);
  }

  //EDITAR
  updateMascota(id: number, mascota: Mascota): Observable<Object>{
    return this.httpClient.put(`${this.mascotaURL}/${id}`, mascota);
  }

  //BORRAR
  deleteMascota(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.mascotaURL}/${id}`);
  }


  //INTERFAZ USUARIO
    mostrarPerros(): Observable<Mascota[]>{
      return this.httpClient.get<Mascota[]>(`${this.mascotaURL}/buscar/tipo?tipoAnimal=0`)
    }

    mostrarGatos(): Observable<Mascota[]>{
      return this.httpClient.get<Mascota[]>(`${this.mascotaURL}/buscar/tipo?tipoAnimal=1`)
    }

    mostrarOtros(): Observable<Mascota[]>{
      return this.httpClient.get<Mascota[]>(`${this.mascotaURL}/buscar/tipo?tipoAnimal=2`)
    }


}
