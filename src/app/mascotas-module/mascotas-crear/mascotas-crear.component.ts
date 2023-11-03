import { Component } from '@angular/core';
import { Mascotas } from '../mascotas';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotasService } from '../mascotas.service';

@Component({
  selector: 'app-mascotas-crear',
  templateUrl: './mascotas-crear.component.html',
  styleUrls: ['./mascotas-crear.component.css']
})
export class MascotasCrearComponent {

  mascota: Mascotas;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private mascotaService: MascotasService) {
          this.mascota = new Mascotas();
        }
  
  onSubmit() {
    this.mascotaService.save(this.mascota).subscribe(result =>
      this.gotoMascotasListar());
  }


  gotoMascotasListar(){
    this.router.navigate(['/Inicio']);
  }

}
