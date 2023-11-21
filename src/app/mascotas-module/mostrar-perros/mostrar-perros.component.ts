import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascotas';
import { MascotasService } from '../mascotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-perros',
  templateUrl: './mostrar-perros.component.html',
  styleUrls: ['./mostrar-perros.component.css']
})
export class MostrarPerrosComponent implements OnInit {

  mascotas: Mascota[];

  constructor(private mascotasService: MascotasService,
    private router: Router){}

  ngOnInit(): void {
    this.getPerrros();
  }


  private getPerrros(){
    this.mascotasService.mostrarPerros().subscribe(data => {
      this.mascotas = data;
    })
  }

}
