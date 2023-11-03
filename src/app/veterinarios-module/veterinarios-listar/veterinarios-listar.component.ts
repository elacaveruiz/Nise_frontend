import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from '../veterinario.service';

@Component({
  selector: 'app-veterinarios-listar',
  templateUrl: './veterinarios-listar.component.html',
  styleUrls: ['./veterinarios-listar.component.css']
})
export class VeterinariosListarComponent {

  veterinarios: Veterinario[];

  constructor(private veterinarioService: VeterinarioService){

  }

  ngOnInit() {
    this.veterinarioService.findAll().subscribe(data => {
      this.veterinarios = data;
    })
  }

}
