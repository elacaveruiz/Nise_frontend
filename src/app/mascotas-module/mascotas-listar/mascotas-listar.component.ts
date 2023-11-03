import { Component, OnInit } from '@angular/core';
import { Mascotas } from '../mascotas';
import { MascotasService } from '../mascotas.service';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit{

  mascotas: Mascotas[];

  constructor(private mascotasService: MascotasService){

  }
  
  ngOnInit() {
    this.mascotasService.findAll().subscribe(data => {
      this.mascotas = data;
    })
  }

}
