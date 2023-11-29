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
      this.animalService.filtroRaza(razaSinEspacios.toLowerCase()).subscribe(data => {
        this.animales = data;
      });
    } else {
      this.getOtros();
    }
  }
}
