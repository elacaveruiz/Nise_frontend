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
  sexoElegido='';
  tipoAnimalElegido: string = "0";
  tamanyoElegido: string = '';
  

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

  onSelected(value: string, tipoAnimalElegido: string) {
    this.sexoElegido = value;
  
    if (this.sexoElegido !== '' || this.sexoElegido !== null || this.tamanyoElegido !== '' || this.tamanyoElegido !== null ) {
      this.animalService.filtroSexoTamanyoYTipoAnimal(this.sexoElegido, this.tamanyoElegido, this.tipoAnimalElegido)
        .subscribe(data => {
          this.animales = data;
        });
    } else{
      this.getPerrros();
    }
  }
  
  onSelected1(value: string, tamanyoElegido: string) {
    this.tamanyoElegido = value;
  
    if (this.sexoElegido !== '' || this.sexoElegido !== null || this.tamanyoElegido !== '' || this.tamanyoElegido !== null) {
      this.animalService.filtroSexoTamanyoYTipoAnimal(this.sexoElegido, this.tamanyoElegido, this.tipoAnimalElegido)
        .subscribe(data => {
          this.animales = data;
        });
    } else {
      this.getPerrros();
    }
  }
  

  
}
