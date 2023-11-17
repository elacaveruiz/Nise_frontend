import { Component, OnInit } from '@angular/core';
import { Protectora } from '../protectora';
import { ActivatedRoute } from '@angular/router';
import { ProtectoraService } from '../protectora.service';

@Component({
  selector: 'app-protectoras-detail',
  templateUrl: './protectoras-detail.component.html',
  styleUrls: ['./protectoras-detail.component.css']
})
export class ProtectorasDetailComponent {

  id: number
  protectora: Protectora
  constructor(private route: ActivatedRoute,
    private protectoraService: ProtectoraService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.protectora = new Protectora();
    this.protectoraService.getProtectoraById(this.id).subscribe(data => {
      this.protectora = data;
    });
  }

}
