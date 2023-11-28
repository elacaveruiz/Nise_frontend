import { Component } from '@angular/core';
import { VeterinarioService } from '../veterinario.service';
import { Veterinario } from '../veterinario';

@Component({
  selector: 'app-veterinarios-main',
  templateUrl: './veterinarios-main.component.html',
  styleUrls: ['./veterinarios-main.component.css']
})
export class VeterinariosMainComponent {

  veterinarios: Veterinario[] //este es el nombre que uso en mi variable del bucle (protectoras-listar.component.html)

  constructor(private veterinarioService: VeterinarioService) { 
    
  }

  ngOnInit() {
    //this.veterinarioService.findAll().subscribe(data => {
    //this.veterinarios = data;
    //})
  }

}
