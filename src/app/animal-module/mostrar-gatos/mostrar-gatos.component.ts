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
  terminoBusqueda: string = '';
  resultados: string[] = [];
  razaABuscar: string;

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
  
  buscar() {
    // Puedes implementar la lógica de búsqueda aquí, por ejemplo, filtrando los gatos que coincidan con el término de búsqueda.
    // Por ahora, simplemente agregaremos un resultado de ejemplo.
    this.resultados.push(`Resultado: ${this.terminoBusqueda}`);
  }

  buscarPorRaza(): void {
    if (this.razaABuscar) {
      const razaSinEspacios = this.razaABuscar.trim();
      this.animalService.filtroRaza(razaSinEspacios.toLowerCase()).subscribe(data => {
        this.animales = data;
      });
    } else {
      this.getGatos();
    }
  }
}

