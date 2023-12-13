import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.component.html',
  styleUrls: ['./not-found-component.component.css']
})
export class NotFoundComponentComponent {
  ngOnInit(): void {
    const audio = new Audio();
    audio.src = 'assets/audio/animales.mp3';
    audio.play();
  }
}
