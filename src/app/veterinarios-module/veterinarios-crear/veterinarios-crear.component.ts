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

  veterinario : Veterinario = {id: 0,
                                nombre: '',
                                direccion: '',
                                telefono: 0,
                                email: '',
                                mapa: '',
                                imagenUrl: ''};
  imagenSeleccionada: File;

  constructor(private veterinarioService: VeterinarioService,
    private router: Router){}

  onImageSeleccionada(event: any): void {
    console.log('Se ha añadido o cambiado una imagen: ', event);
    this.imagenSeleccionada = event.target.files[0];
  }

  saveVeterinario(): void{
    console.log('veterinario:', this.veterinario);
    console.log('imagenSeleccionada', this.imagenSeleccionada);

    if (this.veterinario && this.imagenSeleccionada) {
      this.veterinarioService.createVeterinario(this.veterinario, this.imagenSeleccionada).subscribe(
        () => {
          console.log('Veterinario creado correctamente');
        },
        error => {
          console.log('Veterinario no añadido', error);
        }
      );
    } else{
      console.error('El veterinario o la imagen no están definidos')
    }  
  }
  
  ngOnInit(): void {

  }

  gotoVeterinarioList(){
    this.router.navigate(['/veterinariosListar']);
  }

  onSubmit(){
    console.log(this.veterinario);
    this.saveVeterinario();
  }
}
