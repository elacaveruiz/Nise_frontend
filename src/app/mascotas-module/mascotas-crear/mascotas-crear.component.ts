import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascotas';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotasService } from '../mascotas.service';
import { data, error } from 'jquery';

@Component({
  selector: 'app-mascotas-crear',
  templateUrl: './mascotas-crear.component.html',
  styleUrls: ['./mascotas-crear.component.css']
})
export class MascotasCrearComponent implements OnInit{

  mascota: Mascota = new Mascota();
  constructor(private mascotaSerice: MascotasService,
    private router: Router){}

  ngOnInit(): void {
    
  }

  saveMascota(){
    this.mascotaSerice.createMascota(this.mascota).subscribe(data => {
      console.log(data);
      this.gotoMascotaList();
    },
    error => console.log(error))
  }

  gotoMascotaList(){
    this.router.navigate(['/mascotasListar']);
  }

  onSubmit(){
    console.log(this.mascota);
    this.saveMascota();
  }


}
