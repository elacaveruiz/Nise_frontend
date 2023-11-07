import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterProtectora } from './register-protectora';

@Injectable({
  providedIn: 'root'
})
export class RegisterProtectoraService {

  private registerProtectoraURL: string;

  constructor(private http: HttpClient) {
    this.registerProtectoraURL= 'http://localhost:8080/register_protectora';
   }

  
  //CREAR
  public save(registerProtectora: RegisterProtectora) {
    return this.http.post<RegisterProtectora>(this.registerProtectoraURL, registerProtectora);
  }
}