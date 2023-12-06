import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Solicitud } from './solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

 private solicitudUsuarioURL: string;

 constructor(private http: HttpClient, private router: Router) {
   this.solicitudUsuarioURL = 'http://localhost:8080/solicitudUsuario';
  }


   public save(solicitud: Solicitud){
     this.router.navigate(['/Inicio']);
     return this.http.post<Solicitud>(this.solicitudUsuarioURL, solicitud);
   }
}
