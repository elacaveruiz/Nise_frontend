import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-protectora',
  templateUrl: './animal-protectora.component.html',
  styleUrls: ['./animal-protectora.component.css']
})
export class AnimalProtectoraComponent {

  animales : Animal[];
  username : string;

  ngOnInit(): void {
    const user =  JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;
    this.getAnimal();

  }

 constructor(private animalService: AnimalService){}


  private getAnimal(){
    this.animalService.getAnimalByProtectora().subscribe(data => {
      this.animales = data;
    });
  }
}
