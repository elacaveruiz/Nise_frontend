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



  constructor(private http: HttpClient, private router : Router) {
    this.registerUsuarioURL= 'http://localhost:8080/login';
    this.prueba= 'http://localhost:8080/token/info';
  }


  //CREAR
  public async login(loginDTO: loginDTO){
    setTimeout(async () => {
      const httpData = await this.DataSynchronous();
      localStorage.setItem('dato', JSON.stringify(httpData));
      this.router.navigate(['/Inicio']);
    },500);
    return await this.http.post<loginDTO>(this.registerUsuarioURL, loginDTO).toPromise();

  }


 public datos(){
  let parametros = new HttpParams();
  parametros = parametros.append('token', JSON.parse(localStorage.getItem('token')!).token);
  parametros = parametros.append('frontendKey', 'gatitoPresumido2023');
  const opciones = {
    params: parametros
  }
  return this.http.post(`${this.prueba}`, parametros);

 }

 public async DataSynchronous(){
  const respuesta = await this.datos().toPromise();

  return respuesta;
 }

}
