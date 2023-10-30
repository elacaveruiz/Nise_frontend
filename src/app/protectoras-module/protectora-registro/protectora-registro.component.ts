import { Component, OnInit } from '@angular/core';
import { Protectora } from '../protectora';
import { ActivatedRoute, Router } from '@angular/router';
import { ProtectoraService } from '../protectora.service';

@Component({
  selector: 'app-protectora-registro',
  templateUrl: './protectora-registro.component.html',
  styleUrls: ['./protectora-registro.component.css']
})
export class ProtectoraRegistroComponent{


  protectora: Protectora;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
         private protectoraService: ProtectoraService) { //el azulito es el d mi service importado
           this.protectora = new Protectora();
         }


  onSubmit() {
    this.protectoraService.save(this.protectora).subscribe(result => this.gotoInicio());
  }

 gotoInicio() {
   this.router.navigate(['/Inicio']);
  }  
  
}
