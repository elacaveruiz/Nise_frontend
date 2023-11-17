import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDTO } from './loginDTO';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {

  private registerUsuarioURL: string;
  private prueba : string;
  datosActualizados: Subject<any> = new Subject<any>();



  constructor(private http: HttpClient, private router : Router) { 
    this.registerUsuarioURL= 'http://localhost:8080/login';
    this.prueba= 'http://localhost:8080/token/info';
  }


  //CREAR
  public login(loginDTO: loginDTO){
    this.router.navigate(['/Inicio']);
    return this.http.post<loginDTO>(this.registerUsuarioURL, loginDTO);
    
  }

 public datos(){
  let parametros = new HttpParams();
  parametros = parametros.append('token', JSON.parse(localStorage.getItem('tokenObject')!).token);
  parametros = parametros.append('frontendKey', 'gatitoPresumido2023'); 


  const opciones = {
    params: parametros
  }
//  return this.http.post(`${this.prueba}`, parametros).subscribe(datos => {
    // Cuando los datos estén disponibles, emite el evento con los datos
//    this.datosActualizados.next(datos);
//  });

  return this.http.post(`${this.prueba}`, parametros);
  
 }

}
