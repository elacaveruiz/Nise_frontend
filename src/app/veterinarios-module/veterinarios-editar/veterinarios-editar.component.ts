import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from '../veterinario.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-veterinarios-editar',
  templateUrl: './veterinarios-editar.component.html',
  styleUrls: ['./veterinarios-editar.component.css']
})
export class VeterinariosEditarComponent implements OnInit{

  id: number;
  veterinario: Veterinario = new Veterinario();
  constructor(private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit(){
    this.veterinarioService.updateVeterinario(this.id, this.veterinario).subscribe( data => {
      this.goToVeterinarioList();
    }
    , error => console.log(error));
  }

  goToVeterinarioList(){
    this.router.navigate(['/']);
  }
}
