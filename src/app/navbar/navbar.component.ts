import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nav!: HTMLElement;
  offsetTop!: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.nav = this.elementRef.nativeElement.querySelector('.tabs-container');
    this.offsetTop = this.nav.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    if (window.scrollY >= this.offsetTop) {
      this.nav.classList.add('sticky');
    } else {
      this.nav.classList.remove('sticky');
    }
  }
}
