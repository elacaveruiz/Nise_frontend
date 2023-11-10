import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascotas';
import { MascotasService } from '../mascotas.service';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit{

  mascotas: Mascota[];

  constructor(private mascotasService: MascotasService,
    private router: Router){}
  
  ngOnInit(): void {
    this.getMascotas();
  }

  private getMascotas(){
    this.mascotasService.getMascotaList().subscribe(data => {
      this.mascotas = data;
    });
  }

  mascotaDetails(id: number){
    this.router.navigate(['mascota-details', id]);
  }

  updateMascota(id: number){
    this.router.navigate(['update-mascota', id]);
  }

  deleteMascota(id: number){
    this.mascotasService.deleteMascota(id).subscribe(data => {
      console.log(data);
      this.getMascotas();
    })
  }

}
