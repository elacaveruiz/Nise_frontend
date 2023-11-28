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

}
