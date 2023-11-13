import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from '../veterinario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinarios-listar',
  templateUrl: './veterinarios-listar.component.html',
  styleUrls: ['./veterinarios-listar.component.css']
})
export class VeterinariosListarComponent implements OnInit{

  veterinarios: Veterinario[];

  constructor(private veterinarioService: VeterinarioService,
    private router: Router){}

    ngOnInit(): void {
      this.getVeterinarios();
    }

    private getVeterinarios(){
      this.veterinarioService.getVeterinarioList().subscribe(data => {
        this.veterinarios = data;
      });
    }

    veterinarioDetails(id : number){
      this.router.navigate(['veterinario-details', id]);
    }

    updateVeterinario(id: number){
      this.router.navigate(['update-veterinario', id]);
    }

    deleteVeterinario(id: number){
      this.veterinarioService.deleteVeterinario(id).subscribe(data => {
        console.log(data);
        this.getVeterinarios();
      })
    }

  }




