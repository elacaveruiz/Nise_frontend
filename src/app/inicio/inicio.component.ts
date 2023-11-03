import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{

  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;    
  }  
}


