import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-animal-editar',
  templateUrl: './animal-editar.component.html',
  styleUrls: ['./animal-editar.component.css']
})

export class AnimalEditarComponent implements OnInit {

  id: number;
  animal: Animal = new Animal();
  constructor(private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.animalService.getAnimalById(this.id).subscribe(data => {
      this.animal = data;
    }, error => console.log(error))
  }

  onSubmit(){
    this.animalService.updateAnimal(this.id, this.animal).subscribe(data => {
      this.gotoAnimalList();
    }
    , error => console.log(error));
  }

  gotoAnimalList(){
    this.router.navigate(['/']);
  }

}
