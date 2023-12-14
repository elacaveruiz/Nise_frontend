import { Component, OnInit } from '@angular/core';
import { Protectora } from '../protectora';
import { ProtectoraService } from '../protectora.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-protectoras-crear',
  templateUrl: './protectoras-crear.component.html',
  styleUrls: ['./protectoras-crear.component.css']
})
export class ProtectorasCrearComponent implements OnInit{

  protectora: Protectora = new Protectora();
  constructor(private protectoraService: ProtectoraService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProtectora(){
    this.protectoraService.createProtectora(this.protectora).subscribe( data =>{
      console.log(data);
      this.goToProtectoraList();
    },
    error => console.log(error));
  }

  goToProtectoraList(){
    this.router.navigate(['/protectora/protectorasListar']);
  }

  onSubmit(){
    console.log(this.protectora);
    this.saveProtectora();
  }
}
