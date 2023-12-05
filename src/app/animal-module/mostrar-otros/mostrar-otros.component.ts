import { Component } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-otros',
  templateUrl: './mostrar-otros.component.html',
  styleUrls: ['./mostrar-otros.component.css']
})
export class MostrarOtrosComponent {

  animales: Animal[];
  razaABuscar: string;
  sexoElegido='';
  tipoAnimalElegido: string = "2";
  tamanyoElegido: string = '';

  constructor(private animalService: AnimalService,
    private router: Router){}

  ngOnInit(): void {
    this.getOtros();
  }


  private getOtros(){
    this.animalService.mostrarOtros().subscribe(data => {
      this.animales = data;
    })
  }
  buscarPorRaza(): void {
    if (this.razaABuscar) {
      const razaSinEspacios = this.razaABuscar.trim();
      this.animalService.filtroRaza2(razaSinEspacios.toLowerCase()).subscribe(data => {
        this.animales = data;
      });
    } else {
      this.animales.pop();
      this.getOtros();
    }
  }

  onSelected(value: string, tipoAnimalElegido: string) {
    this.sexoElegido = value;
    if (
      (this.sexoElegido !== '' && this.sexoElegido !== null) ||
      (this.tamanyoElegido !== '' && this.tamanyoElegido !== null)
    ) {
      this.animalService
        .filtroSexoTamanyoYTipoAnimal(
          this.sexoElegido,
          this.tamanyoElegido,
          this.tipoAnimalElegido
        )
        .subscribe((data) => {
          this.animales = data;
        });
    } else if (this.sexoElegido === '' && this.tamanyoElegido === '') {
      this.getOtros();
    }
  }
  
  onSelected1(value: string, tamanyoElegido: string) {
    this.tamanyoElegido = value;
    if (
      (this.sexoElegido !== '' && this.sexoElegido !== null) ||
      (this.tamanyoElegido !== '' && this.tamanyoElegido !== null)
    ) {
      this.animalService
        .filtroSexoTamanyoYTipoAnimal(
          this.sexoElegido,
          this.tamanyoElegido,
          this.tipoAnimalElegido
        )
        .subscribe((data) => {
          this.animales = data;
        });
    } else {
      this.animales.pop();
      this.getOtros();
    }
  }
}
