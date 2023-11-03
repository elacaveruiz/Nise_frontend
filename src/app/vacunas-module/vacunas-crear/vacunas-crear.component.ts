import { Component } from '@angular/core';
import { Vacuna } from '../vacuna';
import { ActivatedRoute, Router } from '@angular/router';
import { VacunaService } from '../vacuna.service';

@Component({
  selector: 'app-vacunas-listar',
  templateUrl: './vacunas-crear.component.html',
  styleUrls: ['./vacunas-crear.component.css']
})
export class VacunasCrearComponent {

  vacuna: Vacuna;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vacunaService: VacunaService){
      this.vacuna = new Vacuna();
    }

  onSubmit() {
    this.vacunaService.save(this.vacuna).subscribe(result =>
      this.gotoVacunasList());
  }


  gotoVacunasList(){
    this.router.navigate(['/vacuna/vacunasListar']);
  }

}
