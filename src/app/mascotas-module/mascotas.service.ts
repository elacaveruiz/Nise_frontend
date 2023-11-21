import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from './mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private httpClient: HttpClient) {}

  private mascotaURL= "http://localhost:8080/animal";
  private mascotasProtectoraURL= "http://localhost:8080/animal/protectorasanimal";

  //LISTAR
  getMascotaList(): Observable<Mascota[]>{
    return this.httpClient.get<Mascota[]>(`${this.mascotaURL}`);
  }

  //LISTAR ONE BY ONE -- DETAIL
  getMascotaById(id: number): Observable<Mascota>{
    return this.httpClient.get<Mascota>(`${this.mascotaURL}/${id}`);
  }

  getMascotaByProtectora() : Observable<Mascota[]>{
    let parametros = new HttpParams();
    parametros = parametros.append('id', localStorage.getItem('id')!);
    const opciones = {
      params : parametros
    }
    return this.httpClient.get<Mascota[]>(`${this.mascotasProtectoraURL}`, opciones);
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
