import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { data } from 'jquery';

@Component({
  selector: 'app-mostrar-gatos-detail',
  templateUrl: './mostrar-gatos-detail.component.html',
  styleUrls: ['./mostrar-gatos-detail.component.css']
})
export class MostrarGatosDetailComponent implements OnInit{

  id: number
  animal: Animal
  constructor(private route: ActivatedRoute,
    private animalService: AnimalService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.animal = new Animal();
    this.animalService.mostrarGatosDetail(this.id).subscribe(data => {
      this.animal = data;
    });
  }

  // gatoDetails: any;
  // id: number;

  // constructor(private animalService : AnimalService){}

  // ngOnInit() {
  //   this.animalService.mostrarGatosDetail(this.id).subscribe(data => {
  //     this.gatoDetails = data;
  //   })
  // }



}
