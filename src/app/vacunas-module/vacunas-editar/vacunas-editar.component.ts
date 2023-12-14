import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Vacuna } from '../vacuna';
import { VacunaService } from '../vacuna.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { data, error } from 'jquery';

@Component({
  selector: 'app-vacunas-editar',
  templateUrl: './vacunas-editar.component.html',
  styleUrls: ['./vacunas-editar.component.css']
})
export class VacunasEditarComponent implements OnInit{

  id: number;
  vacuna: Vacuna = new Vacuna();
  constructor(private vacunaService: VacunaService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.vacunaService.getVacunaById(this.id).subscribe(data => {
      this.vacuna = data;
    }, error => console.log(error))
  }

  onSubmit(){
    this.vacunaService.updateVacuna(this.id, this.vacuna).subscribe(data => {
      this.gotoVacunaList();
    }
    , error => console.log(error));
  }

  gotoVacunaList(){
    this.router.navigate(['/vacuna/vacunasListar']);
  }
}
