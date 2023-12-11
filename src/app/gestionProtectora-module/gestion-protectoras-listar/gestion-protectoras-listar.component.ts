import { Component, OnInit } from '@angular/core';
import { GestionProtectora } from '../gestion-protectora';
import { GestionProtectoraService } from '../gestion-protectora.service';
import { Route, Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-gestion-protectoras-listar',
  templateUrl: './gestion-protectoras-listar.component.html',
  styleUrls: ['./gestion-protectoras-listar.component.css']
})
export class GestionProtectorasListarComponent implements OnInit{

  gestionProtectoras: GestionProtectora[];

  constructor(private gestionProtectoraService: GestionProtectoraService,
    private router: Router){}

    ngOnInit(): void {
      this.getGestionProtectoras();
    }

  private getGestionProtectoras(){
    this.gestionProtectoraService.getGestionProtectoraList().subscribe(data => {
      this.gestionProtectoras = data;
    });
  }

}
