import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.css']
})
export class LoginRegistroComponent {

  @ViewChild('login') login!: ElementRef;
  @ViewChild('signup') signup!: ElementRef;
  @ViewChild('switch') switch!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.login.nativeElement.addEventListener('click', () => {
      this.switch.nativeElement.classList.remove('toRight');
      this.switch.nativeElement.classList.add('toLeft');
    });

    this.signup.nativeElement.addEventListener('click', () => {
      this.switch.nativeElement.classList.remove('toLeft');
      this.switch.nativeElement.classList.add('toRight');
    });
  }

}
