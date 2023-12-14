import { Component, OnInit } from '@angular/core';
import { SolicitudusuarioService } from '../solicitudusuario.service';
import { Router } from '@angular/router';
import { Solicitudusuario } from '../solicitudusuario';

@Component({
  selector: 'app-solicitudusuario-listar',
  templateUrl: './solicitudusuario-listar.component.html',
  styleUrls: ['./solicitudusuario-listar.component.css']
})
export class SolicitudusuarioListarComponent implements OnInit{

  solicitudusuarios: Solicitudusuario[];

  constructor(private solicitudusuarioService: SolicitudusuarioService,
    private router: Router){}

    ngOnInit(): void {
      this.getGestionusuarios();
    }

    private getGestionusuarios(){
      this.solicitudusuarioService.getsolicitudUsuarioList().subscribe(data => {
        this.solicitudusuarios = data;
      });
    }

}
