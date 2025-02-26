import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  showAlert() {
    alert('Bonjour ! Vous avez cliqué sur le bouton.');
  }
}
