import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudService } from '../solicitud.service';
import { Usuario } from 'src/app/inicio/usuario';
import { UsuarioService } from 'src/app/usuarios-module/usuario.service';
import { data } from 'jquery';
import { AnimalService } from 'src/app/animal-module/animal.service';

@Component({
  selector: 'app-solicitud-crear',
  templateUrl: './solicitud-crear.component.html',
  styleUrls: ['./solicitud-crear.component.css']
})
export class SolicitudCrearComponent implements OnInit{

  solicitudForm: FormGroup;
  usuarioLogueado: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private solicitudService: SolicitudService,
    private usuarioService: UsuarioService,
    private animalService: AnimalService
  ){}

  ngOnInit() {
    this.solicitudForm = this.formBuilder.group({
      estadoSolicitud: 'PENDIENTE',
      motivo: '',
      animalDTO: null,
      usuarioDTO: null
      // protectoraDTO: null
    });

    const userId = JSON.parse(localStorage.getItem('id') || '');
    if (userId){
      this.usuarioService.getUsuarioById(userId).subscribe(user => {
        this.usuarioLogueado = user;
        this.solicitudForm.get('usuarioDTO')?.setValue(user);
      });
    }

    this.animalService.getAnimalSeleccionado().subscribe(animal => {
      this.solicitudForm.get('animalDTO')?.setValue(animal);
    });
  }

  onSubmit(){
    const solicitudData = this.solicitudForm.value;
    console.log(solicitudData);

    this.solicitudService.save(solicitudData).subscribe(result => {
      console.log('Solicitud enviada', result);
    });
  }

}
