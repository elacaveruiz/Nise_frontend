import { Component, OnInit } from '@angular/core';
import { Protectora } from '../protectora';
import { ProtectoraService } from '../protectora.service';

@Component({
  selector: 'app-protectoras-listar', 
  templateUrl: './protectoras-listar.component.html',
  styleUrls: ['./protectoras-listar.component.css']
})
export class ProtectorasListarComponent implements OnInit{

  protectoras: Protectora[] //este es el nombre que uso en mi variable del bucle (protectoras-listar.component.html)

  constructor(private protectoraService: ProtectoraService) { }

  ngOnInit() {
    this.protectoraService.findAll().subscribe(data => {
      this.protectoras = data;
    })
  }

  // ngOnInit(): void {
  //   this.getProtectoras();
  // }

  // private getProtectoras(){
  //   this.protectoraService.getProtectoraList().subscribe(data => {
  //     this.protectoras = data;

  //   })
  // }
}
