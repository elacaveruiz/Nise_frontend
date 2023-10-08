import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


