import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacuna } from './vacuna';

@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  private vacunasURL: string;

  constructor(private http: HttpClient) {
    this.vacunasURL = 'http://localhost:8080/vacuna';
   }


  //LISTAR
  public findAll(): Observable<Vacuna[]> {
    return this.http.get<Vacuna[]>(this.vacunasURL);
  }


  //GUARDAR
  public save(vacuna: Vacuna){
    return this.http.post<Vacuna>(this.vacunasURL, vacuna);
  }




}
