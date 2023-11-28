import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { data } from 'jquery';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit{

  id: number
  animal: Animal
  constructor(private route: ActivatedRoute,
    private animalService: AnimalService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.animal = new Animal();
    this.animalService.getAnimalById(this.id).subscribe(data => {
      this.animal = data;
    });
  }
}
