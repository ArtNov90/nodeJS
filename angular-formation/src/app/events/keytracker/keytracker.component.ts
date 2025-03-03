import { Component } from '@angular/core';

@Component({
  selector: 'app-keytracker',
  imports: [],
  template: `<input type="text" (keydown)="handleKeyDown($event)" (keyup)="handleKeyUp($event)" placeholder="Tapez ici..." />`,
  styleUrl: './keytracker.component.css'
})
export class KeytrackerComponent {
  handleKeyDown(event: KeyboardEvent) {
    console.log(`Touche enfoncée : ${event.key}`);
  }

  handleKeyUp(event: KeyboardEvent) {
    console.log(`Touche relâchée : ${event.key}`);
  }
}
