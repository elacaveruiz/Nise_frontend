import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Protectora } from './protectora';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  private usuarioURL= "http://localhost:8080/usuario";
  private usernamesURL= "http://localhost:8080/usuario/username";
  private usernamesProtectorasURL= "http://localhost:8080/protectora/username";
  private animalURL= "http://localhost:8080/animal";
  //LISTAR
  getUsuarioList(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.usuarioURL}`);
  }


  //LISTAR ONE BY ONE -- DETAIL
  getUsuarioById(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usuarioURL}/${id}`);
  }

  getUsuariobyUsername(username: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usernamesURL}/${username}`);
  }

  getProtectoraUsername(username: string): Observable<Protectora>{
    return this.httpClient.get<Protectora>(`${this.usernamesProtectorasURL}/${username}`);
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

    const gestionRole = this.getUserRole();

    formData.append('rol', gestionRole)

    return this.httpClient.post(`${this.animalURL}`, formData);
  }

  getUserData(): number {
    const userDataID = JSON.parse(localStorage.getItem('id')!);
    console.log(userDataID);
    return userDataID;
  }

  getUserRole(): string {
    let userDataRole = JSON.parse(localStorage.getItem('dato')!);
    return userDataRole.rol;
  }
}
