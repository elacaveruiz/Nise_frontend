import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Animal } from './animal';
import { Protectora } from '../usuarios-module/protectora';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animalSeleccionadoSubject: BehaviorSubject<Animal | null>= new BehaviorSubject<Animal | null>(null);
  private animalSeleccionado$: Observable<Animal | null> = this.animalSeleccionadoSubject.asObservable();

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

    const gestionString = JSON.stringify(this.getUserData());

    formData.append('gestion', gestionString)

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

  mostrarPerrosDetail(id: number): Observable<Animal>{
    return this.httpClient.get<Animal>(`${this.animalURL}/buscar/tipo/${id}?tipoAnimal=0`);
  }

  mostrarGatosDetail(id: number): Observable<Animal>{
    return this.httpClient.get<Animal>(`${this.animalURL}/buscar/tipo/${id}?tipoAnimal=1`);
  }

  mostrarOtrosDetail(id: number): Observable<Animal>{
    return this.httpClient.get<Animal>(`${this.animalURL}/buscar/tipo/${id}?tipoAnimal=2`);
  }

  //FILTRO
  filtroRaza(raza: string): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.animalURL}/filtros?raza=${raza}&tipoAnimal=0`);
  }

  filtroRaza1(raza: string): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.animalURL}/filtros?raza=${raza}&tipoAnimal=1`);
  }


  filtroRaza2(raza: string): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.animalURL}/filtros?raza=${raza}&tipoAnimal=2`);
  }


filtroSexoTamanyoYTipoAnimal(sexo: string, tamanyo: string, tipoAnimal: string): Observable<Animal[]> {
  return this.httpClient.get<Animal[]>(`${this.animalURL}/filtros?sexo=${sexo}&tipoTamanyo=${tamanyo}&tipoAnimal=${tipoAnimal}`);
  }
  getUserData(): number {
    const userDataID = localStorage.getItem('id');
    console.log(userDataID);
    if (userDataID) {
      return JSON.parse(userDataID);
    } else {
      return 0; // O algún otro manejo si no hay datos de usuario en el localStorage
    }
  }
}
