import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) {}

  private animalURL= "http://localhost:8080/animal";
  private animalProtectoraURL= "http://localhost:8080/animal/protectorasanimal"

  //LISTAR
  getAnimalList(): Observable<Animal[]>{
    return this.httpClient.get<Animal[]>(`${this.animalURL}`);
  }

  //LISTAR ONE BY ONE -- DETAIL
  getAnimalById(id: number): Observable<Animal>{
    return this.httpClient.get<Animal>(`${this.animalURL}/${id}`);
  }

  getAnimalByProtectora() : Observable<Animal[]>{
    let parametros = new HttpParams();
    parametros = parametros.append('id', localStorage.getItem('id')!);
    const opciones = {
      params : parametros
    }
    return this.httpClient.get<Animal[]>(`${this.animalProtectoraURL}`, opciones);
  }

  //CREAR
  createAnimal(animal: Animal, imagen: File): Observable<any>{
    const formData = new FormData();

    const animalToSend = {
      nombre: animal.nombre,
      descripcion: animal.descripcion,
      raza: animal.raza,
      edad: animal.edad,
      disponibilidad: animal.disponibilidad,
      chip: animal.chip,
      tipoAnimal: animal.tipoAnimal,
      tipoSexo: animal.tipoSexo,
      tipoTamanyo: animal.tipoTamanyo,
      fechaEntradaProtectora: animal.fechaEntradaProtectora
    };

    formData.append('imagen', imagen, imagen.name);

    const animalString = JSON.stringify(animalToSend);

    formData.append('animal', animalString);

    return this.httpClient.post(`${this.animalURL}`, formData);
  }

  //EDITAR
  updateAnimal(id: number, animal: Animal): Observable<Object>{
    return this.httpClient.put(`${this.animalURL}/${id}`, animal);
  }

  //BORRAR
  deleteAnimal(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.animalURL}/${id}`);
  }

  //INTERFAZ USUARIO
  mostrarPerros(): Observable<Animal[]>{
    return this.httpClient.get<Animal[]>(`${this.animalURL}/buscar/tipo?tipoAnimal=0`)
  }

  mostrarGatos(): Observable<Animal[]>{
    return this.httpClient.get<Animal[]>(`${this.animalURL}/buscar/tipo?tipoAnimal=1`)
  }

  mostrarOtros(): Observable<Animal[]>{
    return this.httpClient.get<Animal[]>(`${this.animalURL}/buscar/tipo?tipoAnimal=2`)
  }

  //FILTRO
  filtroRaza(raza: string): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.animalURL}/filtros?raza=${raza}`);
  }

filtroSexoTamanyoYTipoAnimal(sexo: string, tamanyo: string, tipoAnimal: string): Observable<Animal[]> {
  return this.httpClient.get<Animal[]>(`${this.animalURL}/filtros?sexo=${sexo}&tipoTamanyo=${tamanyo}&tipoAnimal=${tipoAnimal}`);
}

}