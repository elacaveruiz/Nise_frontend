import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-mostrar-perros-detail',
  templateUrl: './mostrar-perros-detail.component.html',
  styleUrls: ['./mostrar-perros-detail.component.css']
})
export class MostrarPerrosDetailComponent {
  id: number
  animal: Animal
  constructor(private route: ActivatedRoute,
    private animalService: AnimalService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.animal = new Animal();
    this.animalService.mostrarPerrosDetail(this.id).subscribe(data => {
      this.animal = data;
    });
  }

}
