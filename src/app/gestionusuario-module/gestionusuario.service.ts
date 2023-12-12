import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GestionusuarioComponent } from './gestionusuario.component';
import { Gestionusuario } from './gestionusuario';

@Injectable({
  providedIn: 'root'
})
export class GestionusuarioService {

  constructor(private httpClient: HttpClient) {}
  private gestionusuarioURL = "http://localhost:8080/gestionusuario" //cambiar esto en el back

//LISTAR
getGestionUsuarioList(): Observable<Gestionusuario[]>{
  return this.httpClient.get<Gestionusuario[]>(`${this.gestionusuarioURL}`);
}
}

