import { Component, OnInit } from '@angular/core';
import { ProtectoraService } from '../protectora.service';
import { Protectora } from '../protectora';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-protectoras-editar',
  templateUrl: './protectoras-editar.component.html',
  styleUrls: ['./protectoras-editar.component.css']
})
export class ProtectorasEditarComponent implements OnInit{

  id: number;
  protectora: Protectora = new Protectora();
  constructor(private protectoraService: ProtectoraService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.protectoraService.getProtectoraById(this.id).subscribe(data => {
      this.protectora = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.protectoraService.updateProtectora(this.id, this.protectora).subscribe( data => {
      this.goToProtectoraList();
    }
    , error => console.log(error));
  }

  goToProtectoraList(){
    this.router.navigate(['/protectora/protectorasListar']);
  }

}
