import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../solicitud';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from '../solicitud.service';
import { data } from 'jquery';

@Component({
  selector: 'app-solicitud-detail-modal',
  templateUrl: './solicitud-detail-modal.component.html',
  styleUrls: ['./solicitud-detail-modal.component.css']
})
export class SolicitudDetailModalComponent implements OnInit{

  id:number
  solicitud: Solicitud
  constructor(private route: ActivatedRoute,
    private solicitudService: SolicitudService){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.solicitud = new Solicitud();
    this.solicitudService.getSolicitudById(this.id).subscribe(data => {
      this.solicitud = data;
    });
  }

}
