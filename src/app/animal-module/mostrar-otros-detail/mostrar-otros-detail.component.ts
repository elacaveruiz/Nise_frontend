import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { ProtectoraService } from 'src/app/protectoras-module/protectora.service';

@Component({
  selector: 'app-mostrar-otros-detail',
  templateUrl: './mostrar-otros-detail.component.html',
  styleUrls: ['./mostrar-otros-detail.component.css']
})
export class MostrarOtrosDetailComponent {
  id: number
  animal: Animal
  protectoraId: number
  constructor(private route: ActivatedRoute,
    private animaService: AnimalService,
    private protectoraService: ProtectoraService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.animal = new Animal();
    this.animaService.mostrarOtrosDetail(this.id).subscribe(data => {
      this.animal = data;


    //id protectora
    this.protectoraService.getProtectoraByAnimalId(this.id).subscribe(protectoraData =>{
      this.protectoraId = protectoraData.id;
    })

    });
  }

}
