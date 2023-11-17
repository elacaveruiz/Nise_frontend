import { Component, ElementRef, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuarioService } from '../login-registro/login-registro.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  rol : any = '';
  token : any = '';
  datos : any;

  constructor( private router :Router, private LoginUsuarioService: LoginUsuarioService){}
  ngOnInit(){
    const token = JSON.parse(localStorage.getItem('tokenObject')!);
    this.token = token?.token || '';

    setTimeout(() => {
      if (token !== null && token !== undefined && token !== '') { 
        this.LoginUsuarioService.datos().subscribe(result =>{
          window.localStorage.setItem('datos', JSON.stringify(result));
        });
        if (!localStorage.getItem('pipo')) {
          // Establece la variable 'reloaded' en el almacenamiento local
          localStorage.setItem('pipo', 'true');
          // Recarga la página
          location.reload();
        }
      }
        if (!localStorage.getItem('reloaded')) {
          // Establece la variable 'reloaded' en el almacenamiento local
          localStorage.setItem('reloaded', 'true');
          // Recarga la página
          location.reload();
        }
     
       }, 1000);




//    this.LoginUsuarioService.datos();

//   this.LoginUsuarioService.datosActualizados.subscribe(datos => {
//      // Aquí puedes actualizar tu interfaz de usuario con los nuevos datos
//      this.datos = localStorage.setItem('datos', JSON.stringify(datos));
//    });


    const perico = JSON.parse(localStorage.getItem('datos')!);
    this.rol = perico?.rol || '';
    
      
  }


  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;    
  }  


  public logout(){
    localStorage.clear();
    this.rol = '';
    this.token = '';
    this.router.navigate(['']);
  }





  
}


