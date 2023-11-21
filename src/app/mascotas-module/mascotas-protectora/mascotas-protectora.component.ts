import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascotas';

@Component({
  selector: 'app-mascotas-protectora',
  templateUrl: './mascotas-protectora.component.html',
  styleUrls: ['./mascotas-protectora.component.css']
})
export class MascotasProtectoraComponent implements OnInit {

  mascotas : Mascota[];
  username : string;

  ngOnInit(): void {
    const user =  JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;
    this.getMascotas();

  }

 constructor(private mascotasService: MascotasService){}


  private getMascotas(){
    this.mascotasService.getMascotaByProtectora().subscribe(data => {
      this.mascotas = data;
    });
  }
}