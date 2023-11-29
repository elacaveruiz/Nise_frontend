// mostrar-perros.component.ts

import { Component } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-perros',
  templateUrl: './mostrar-perros.component.html',
  styleUrls: ['./mostrar-perros.component.css']
})
export class MostrarPerrosComponent {

  animales: Animal[];
  razaABuscar: string;

  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {
    this.getPerrros();
  }

  private getPerrros(): void {
    this.animalService.mostrarPerros().subscribe(data => {
      this.animales = data;
    });
  }

  buscarPorRaza(): void {
    if (this.razaABuscar) {
      const razaSinEspacios = this.razaABuscar.trim();
      this.animalService.filtroRaza(razaSinEspacios.toLowerCase()).subscribe(data => {
        this.animales = data;
      });
    } else {
      this.getPerrros();
    }
  }
  
}
