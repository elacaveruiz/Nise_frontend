import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascotas';
import { MascotasService } from '../mascotas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {

  id: number;
  mascota: Mascota = new Mascota();
  constructor(private mascotaService: MascotasService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.mascotaService.getMascotaById(this.id).subscribe(data => {
      this.mascota = data;
    }, error => console.log(error))
  }

  onSubmit(){
    this.mascotaService.updateMascota(this.id, this.mascota).subscribe(data => {
      this.gotoMascotaList();
    }
    , error => console.log(error));
  }

  gotoMascotaList(){
    this.router.navigate(['/']);
  }

}
