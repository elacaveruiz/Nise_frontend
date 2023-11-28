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

}
