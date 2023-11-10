import { Component, OnInit } from '@angular/core';
import { Vacuna } from '../vacuna';
import { VacunaService } from '../vacuna.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacunas-listar',
  templateUrl: './vacunas-listar.component.html',
  styleUrls: ['./vacunas-listar.component.css']
})
export class VacunasListarComponent implements OnInit{

  vacunas: Vacuna[];

  constructor(private vacunaService: VacunaService,
    private router: Router){}

  ngOnInit(): void {
    this.getVacunas();
  }


  private getVacunas(){
    this.vacunaService.getVacunaList().subscribe(data => {
      this.vacunas = data;
    });
  }

  
  vacunaDetails(id : number){
    this.router.navigate(['vacuna-details', id]);
  }

  updateVacuna(id: number){
    this.router.navigate(['update-vacuna', id]);
  }

  deleteVacuna(id: number){
    this.vacunaService.deleteVacuna(id).subscribe(data => {
      console.log(data);
      this.getVacunas();
    })
  }

}
