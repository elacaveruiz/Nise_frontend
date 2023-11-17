import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios-detail',
  templateUrl: './usuarios-detail.component.html',
  styleUrls: ['./usuarios-detail.component.css']
})
export class UsuariosDetailComponent implements OnInit{

  id: number
  usuario: Usuario
  constructor(private route: ActivatedRoute,
    private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usuario = new Usuario();
    this.usuarioService.getUsuarioById(this.id).subscribe(data => {
      this.usuario = data;
    });
  }

}
