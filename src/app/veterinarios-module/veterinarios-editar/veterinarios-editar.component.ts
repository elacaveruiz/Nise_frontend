import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from '../veterinario.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { data, error } from 'jquery';


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
    private router: Router) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];


    this.veterinarioService.getVeterinarioById(this.id).subscribe(data => {
      this.veterinario = data;
    }, error => console.log(error))
  }


  onSubmit(){
    this.veterinarioService.updateVeterinario(this.id, this.veterinario).subscribe(data => {
      this.gotoVeterinarioList();
    }
    , error => console.log(error));
  }


  gotoVeterinarioList(){
    this.router.navigate(['/']);
  }
}
