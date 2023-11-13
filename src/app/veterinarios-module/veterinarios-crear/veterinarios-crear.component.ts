import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from '../veterinario.service';

@Component({
  selector: 'app-veterinarios-crear',
  templateUrl: './veterinarios-crear.component.html',
  styleUrls: ['./veterinarios-crear.component.css']
})
export class VeterinariosCrearComponent implements OnInit {

  veterinario : Veterinario = new Veterinario();
  constructor(private veterinarioService: VeterinarioService,
    private router: Router){}

  ngOnInit(): void {

  }

  saveVeterinario(){
    this.veterinarioService.createVeterinario(this.veterinario).subscribe( data => {
      console.log(data);
      this.gotoVeterinarioList();
    },
    error => console.log(error))
  }

  gotoVeterinarioList(){
    this.router.navigate(['/veterinariosListar']);
  }

  onSubmit(){
    console.log(this.veterinario);
    this.saveVeterinario();
  }
}
//mirar rutas
