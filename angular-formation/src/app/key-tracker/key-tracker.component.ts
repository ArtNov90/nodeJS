import { Component } from '@angular/core';

@Component({
  selector: 'app-key-tracker',
  imports: [],
  templateUrl: './key-tracker.component.html',
  styleUrl: './key-tracker.component.css'
})
export class KeyTrackerComponent {
  
  onKeyDown(event: KeyboardEvent) {
    console.log(`Touche enfoncée : ${event.key}`);
  }

  onKeyUp(event: KeyboardEvent) {
    console.log(`Touche relâchée : ${event.key}`);
  }
}
