import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { loginDTO } from '../loginDTO';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit{

  usuarios: Usuario[];
  // loginDTO: loginDTO[];

  constructor(private usuarioService: UsuarioService,
    private router: Router){}

  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios(){
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });
  }

  usuarioDetail(id: number){
    this.router.navigate(['usuario-details', id]);
  }

}
