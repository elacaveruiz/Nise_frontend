import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascotas';
import { ActivatedRoute } from '@angular/router';
import { MascotasService } from '../mascotas.service';
import { data } from 'jquery';

@Component({
  selector: 'app-mascotas-detail',
  templateUrl: './mascotas-detail.component.html',
  styleUrls: ['./mascotas-detail.component.css']
})
export class MascotasDetailComponent implements OnInit{

  id: number
  mascota: Mascota
  constructor(private route: ActivatedRoute,
    private mascotaService: MascotasService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.mascota = new Mascota();
    this.mascotaService.getMascotaById(this.id).subscribe(data => {
      this.mascota = data;
    });
  }

}
