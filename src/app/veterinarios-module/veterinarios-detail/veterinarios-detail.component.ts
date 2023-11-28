import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario';
import { ActivatedRoute } from '@angular/router';
import { VeterinarioService } from '../veterinario.service';

@Component({
  selector: 'app-veterinarios-detail',
  templateUrl: './veterinarios-detail.component.html',
  styleUrls: ['./veterinarios-detail.component.css']
})
export class VeterinariosDetailComponent implements OnInit{

  id: number
  veterinario: Veterinario
  constructor(private route: ActivatedRoute,
    private veterinarioService: VeterinarioService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.veterinario = new Veterinario();
    this.veterinarioService.getVeterinarioById(this.id).subscribe(data => {
      this.veterinario = data;
    });
  }
}

