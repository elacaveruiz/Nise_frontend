import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GestionProtectora } from './gestion-protectora';

@Injectable({
  providedIn: 'root'
})
export class GestionProtectoraService {

  private gestionProtectoraURL = "http://localhost:8080/gestionprotectora"

  constructor(private httpClient: HttpClient) { }


  //LISTAR DE TODAS LAS GESTIONES DE TODAS LAS PROTECTORAS
  getGestionProtectoraList(): Observable<GestionProtectora[]>{
    return this.httpClient.get<GestionProtectora[]>(`${this.gestionProtectoraURL}`)
  }


}
