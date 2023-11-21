import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascotas';
import { MascotasService } from '../mascotas.service';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-mostrar-gatos',
  templateUrl: './mostrar-gatos.component.html',
  styleUrls: ['./mostrar-gatos.component.css']
})
export class MostrarGatosComponent implements OnInit{

  mascotas: Mascota[];

  constructor(private mascotasService: MascotasService,
    private router: Router){}

  ngOnInit(): void {
    this.getGatos();
  }


  private getGatos(){
    this.mascotasService.mostrarGatos().subscribe(data => {
      this.mascotas = data;
    })
  }

}
