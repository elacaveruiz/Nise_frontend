import { Component, OnInit } from '@angular/core';
import { Vacuna } from '../vacuna';
import { ActivatedRoute, Router } from '@angular/router';
import { VacunaService } from '../vacuna.service';

@Component({
  selector: 'app-vacunas-listar',
  templateUrl: './vacunas-crear.component.html',
  styleUrls: ['./vacunas-crear.component.css']
})
export class VacunasCrearComponent implements OnInit{

  vacuna: Vacuna = new Vacuna();
  constructor(private vacunaService: VacunaService,
    private router: Router){}

  ngOnInit(): void {

  }

  saveVacuna(){
    this.vacunaService.createVacuna(this.vacuna).subscribe( data => {
      console.log(data);
      this.gotoVacunaList();
    },
    error => console.log(error))
  }

  gotoVacunaList(){
    this.router.navigate(['/vacuna/vacunasListar']);
  }

  onSubmit(){
    console.log(this.vacuna);
    this.saveVacuna();
  }


}
