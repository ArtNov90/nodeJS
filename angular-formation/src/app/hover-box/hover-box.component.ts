import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-box',
  imports: [],
  templateUrl: './hover-box.component.html',
  styleUrl: './hover-box.component.css'
})
export class HoverBoxComponent {
  textColor: string = 'black'; // Couleur par défaut

  changeColor() {
    this.textColor = 'blue'; // Change la couleur au survol
  }
  resetColor() {
    this.textColor = 'black'; // Remet la couleur normale quand la souris quitte
  }
}
