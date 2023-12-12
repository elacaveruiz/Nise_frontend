import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/inicio/usuario';
import { SolicitudusuarioService } from '../solicitudusuario.service';
import { UsuarioService } from 'src/app/usuarios-module/usuario.service';
import { AnimalService } from 'src/app/animal-module/animal.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-solicitudusuario-crear',
  templateUrl: './solicitudusuario-crear.component.html',
  styleUrls: ['./solicitudusuario-crear.component.css']
})
export class SolicitudusuarioCrearComponent implements OnInit{
  solicitudUsuarioForm: FormGroup;
  usuarioLogueado: Usuario;
  username: string;
  animalId: number;
  ofertanteId: number;

  constructor(
    private formBuilder: FormBuilder,
    private solicitudUsuarioService: SolicitudusuarioService,
    private usuarioService: UsuarioService,
    privateanimalService: AnimalService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;

    //this.route.paramMap.subscribe(params => {
      //const idParam = params.get('id')
      //if(idParam !== null){
        //this.animalId = +idParam;

        //this.usuarioService.getUsuariobyUsername(this.username).subscribe(data => {
          //this.usuarioLogueado = data;
          //this.solicitudUsuarioForm.get('usuarioDTO')?.setValue(data);
        //});

        //this.animalService.getAnimalById(this.animalId).subscribe(animal => {
          //this.solicitudUsuarioForm.get('animalDTO')?.setValue(animal);
        //})
      //}
    //});

    this.solicitudUsuarioForm = this.formBuilder.group({
      estadoSolicitud: 'PENDIENTE',
      motivo: '',
      tituloMotivo: '',
      animalDTO: [],
      adoptanteDTO: [],
      ofertanteDTO: []
    });
  }

    onSubmit(){
    const solicitudusuarioData = this.solicitudUsuarioForm.value;
    console.log(solicitudusuarioData);

    this.solicitudUsuarioService.save(solicitudusuarioData).subscribe(result => {
      console.log('Solicitud enviada', result);
    });
  }
}
