import { Component } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-gatos',
  templateUrl: './mostrar-gatos.component.html',
  styleUrls: ['./mostrar-gatos.component.css']
})
export class MostrarGatosComponent {

  animales: Animal[];
  razaABuscar: string;
  sexoElegido='';
  tipoAnimalElegido: string = "1";
  tamanyoElegido: string = '';


  constructor(private animalService: AnimalService,
    private router: Router){}

  ngOnInit(): void {
   this.getGatos();

  }

  private getGatos(){
    this.animalService.mostrarGatos().subscribe(data => {
      this.animales = data;
    })
  }

  buscarPorRaza(): void {
    if (this.razaABuscar) {
      const razaSinEspacios = this.razaABuscar.trim();
      this.animalService.filtroRaza1(razaSinEspacios.toLowerCase()).subscribe(data => {
        this.animales = data;
      });
    } else {
      this.animales.pop();
      this.getGatos();
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
      this.getGatos();
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
      this.getGatos();
    }
  }

}

