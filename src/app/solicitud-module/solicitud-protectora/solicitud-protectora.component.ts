import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';
import { data } from 'jquery';
import { Solicitud } from '../solicitud';


@Component({
  selector: 'app-solicitud-protectora',
  templateUrl: './solicitud-protectora.component.html',
  styleUrls: ['./solicitud-protectora.component.css']
})
export class SolicitudProtectoraComponent implements OnInit{


  solicitudes: Solicitud[];
  username : string;


  constructor(private solicitudService: SolicitudService){}


  ngOnInit(): void {
    const user =  JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;
    this.getSolicitud();
  }


  private getSolicitud(){
    this.solicitudService.getSolicitudByProtectora().subscribe(data => {
      this.solicitudes = data;
    })
  }


}



