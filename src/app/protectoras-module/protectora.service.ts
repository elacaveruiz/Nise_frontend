import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Protectora } from './protectora';

@Injectable({
  providedIn: 'root'
})
export class ProtectoraService {


  private protectoraURL: string;

  constructor(private http: HttpClient) {
    this.protectoraURL = 'http://localhost:8080/nise/protectora';
   }


  // getProtectoraList(): Observable<Protectora[]> {
  //   return this.httpClient.get<Protectora[]>('${this.baseURL}');
  // }

   //LISTAR
  public findAll(): Observable<Protectora[]> {
    return this.http.get<Protectora[]>(this.protectoraURL);
  }


  //CREAR(?)
  public save(protectora: Protectora) {
    return this.http.post<Protectora>(this.protectoraURL, protectora);
  }
  // crearProtectora(protectora: Protectora): Observable<Object>{
  //   return this.http.post('${this.baseURL}', protectora);
  // }



}
