import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascotas';
import { MascotasService } from '../mascotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-otros',
  templateUrl: './mostrar-otros.component.html',
  styleUrls: ['./mostrar-otros.component.css']
})
export class MostrarOtrosComponent implements OnInit{

  mascotas: Mascota[];

  constructor(private mascotasService: MascotasService,
    private router: Router){}

  ngOnInit(): void {
    this.getOtros();
  }


  private getOtros(){
    this.mascotasService.mostrarOtros().subscribe(data => {
      this.mascotas = data;
    })
  }

}
