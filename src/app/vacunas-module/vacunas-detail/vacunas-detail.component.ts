import { Component, OnInit } from '@angular/core';
import { Vacuna } from '../vacuna';
import { ActivatedRoute } from '@angular/router';
import { VacunaService } from '../vacuna.service';

@Component({
  selector: 'app-vacunas-detail',
  templateUrl: './vacunas-detail.component.html',
  styleUrls: ['./vacunas-detail.component.css']
})
export class VacunasDetailComponent implements OnInit{

  id: number
  vacuna: Vacuna
  constructor(private route: ActivatedRoute,
    private vacunaService: VacunaService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.vacuna = new Vacuna();
    this.vacunaService.getVacunaById(this.id).subscribe(data => {
      this.vacuna = data;
    });
  }
}
