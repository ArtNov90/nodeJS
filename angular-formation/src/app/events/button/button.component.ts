import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: '<button (click)="buttonClick()">Cliquez-moi</button>',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  buttonClick = () => {

    alert("Bouton cliqué !");
  };

}
