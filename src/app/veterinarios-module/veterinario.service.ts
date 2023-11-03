import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from './veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  private veterinarioURL: string;

  constructor(private http: HttpClient) { 
    this.veterinarioURL = 'http://localhost:8080/veterinario';
  }

  public findAll(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(this.veterinarioURL);
  }

  public save(veterinario : Veterinario) {
    return this.http.post<Veterinario>(this.veterinarioURL, veterinario);
  }
}
