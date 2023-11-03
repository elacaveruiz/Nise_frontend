import { Component } from '@angular/core';
import { Veterinario } from '../veterinario';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from '../veterinario.service';

@Component({
  selector: 'app-veterinarios-crear',
  templateUrl: './veterinarios-crear.component.html',
  styleUrls: ['./veterinarios-crear.component.css']
})
export class VeterinariosCrearComponent {

  veterinario : Veterinario;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private veterinarioService: VeterinarioService){
    this.veterinario = new Veterinario();
        }


  onSubmit(){
    this.veterinarioService.save(this.veterinario).subscribe(result =>
      this.gotoInicio());
  }

  gotoInicio() {
    this.router.navigate(['/Inicio']);
   } 
}
