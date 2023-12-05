import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-animal-listar',
  templateUrl: './animal-listar.component.html',
  styleUrls: ['./animal-listar.component.css']
})
export class AnimalListarComponent implements OnInit{
  animals: Animal[];

  onSubmit: any;

  constructor(private animalService: AnimalService,
    private router: Router){}
  
  ngOnInit(): void {
    this.getAnimal();
  }

  private getAnimal(){
    this.animalService.getAnimalList().subscribe(data => {
      this.animals = data;
    });
  }

  animalDetails(id: number){
    this.router.navigate(['animal-details', id]);
  }

  updateAnimal(id: number){
    this.router.navigate(['update-animal', id]);
  }

  deleteAnimal(id: number){
    this.animalService.deleteAnimal(id).subscribe(data => {
      console.log(data);
      this.getAnimal();
    })
  }

}
