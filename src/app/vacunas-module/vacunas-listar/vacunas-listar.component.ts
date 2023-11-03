import { Component, OnInit } from '@angular/core';
import { Vacuna } from '../vacuna';
import { VacunaService } from '../vacuna.service';

@Component({
  selector: 'app-vacunas-listar',
  templateUrl: './vacunas-listar.component.html',
  styleUrls: ['./vacunas-listar.component.css']
})
export class VacunasListarComponent implements OnInit{

  vacunas: Vacuna[];

  constructor(private vacunaService: VacunaService){

  }


  ngOnInit(): void {
    this.vacunaService.findAll().subscribe(data => {
      this.vacunas = data;
    })
  }

}
