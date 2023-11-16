import { Component, OnInit } from '@angular/core';
import { Protectora } from '../protectora';
import { ProtectoraService } from '../protectora.service';
import { Router } from '@angular/router';
import { ProtectorasCrearComponent } from '../protectoras-crear/protectoras-crear.component';

@Component({
  selector: 'app-protectoras-listar', 
  templateUrl: './protectoras-listar.component.html',
  styleUrls: ['./protectoras-listar.component.css']
})
export class ProtectorasListarComponent implements OnInit{

  protectoras: Protectora[];

  constructor(private protectoraService: ProtectoraService,
    private router: Router){}

  ngOnInit(): void {
    this.getProtectoras();
  }


  private getProtectoras(){
    this.protectoraService.getProtectoraList().subscribe(data => {
      this.protectoras = data;
    });
  }

  protectoraDetails(id: number){
    this.router.navigate(['protectora-details', id]);
  }

  updateProtectora(id: number){
    this.router.navigate(['update-protectora', id]);
  }

  deleteProtectora(id: number): void {
    this.protectoraService.deleteProtectora(id).subscribe(
      () => {
      console.log('Registro eliminado correctamente');
      }, error => {
      console.error('Error al eliminar el registro', error);
      }
    )
  }
}
