import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { data } from 'jquery';
import { ProtectoraService } from 'src/app/protectoras-module/protectora.service';

@Component({
  selector: 'app-mostrar-gatos-detail',
  templateUrl: './mostrar-gatos-detail.component.html',
  styleUrls: ['./mostrar-gatos-detail.component.css']
})
export class MostrarGatosDetailComponent implements OnInit{

  id: number
  animal: Animal
  protectoraId: number
  constructor(private route: ActivatedRoute,
    private animalService: AnimalService,
    private protectoraService: ProtectoraService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.animal = new Animal();
    this.animalService.mostrarGatosDetail(this.id).subscribe(data => {
      this.animal = data;


    //id protectora
    this.protectoraService.getProtectoraByAnimalId(this.id).subscribe(protectoraData =>{
      this.protectoraId = protectoraData.id;
    })

    });
  }


}
