import { Component, OnInit } from '@angular/core';
import { Gestionusuario } from '../gestionusuario';
import { GestionusuarioService } from '../gestionusuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionusuario-listar',
  templateUrl: './gestionusuario-listar.component.html',
  styleUrls: ['./gestionusuario-listar.component.css']
})
export class GestionusuarioListarComponent implements OnInit {

  gestionusuarios: Gestionusuario[];

  constructor(private gestionusuarioService: GestionusuarioService,
    private router: Router){}

    ngOnInit(): void {
      this.getGestionusuarios();
    }

    private getGestionusuarios(){
      this.gestionusuarioService.getGestionUsuarioList().subscribe(data => {
        this.gestionusuarios = data;
      });
    }

}
