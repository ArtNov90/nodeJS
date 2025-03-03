import { Component } from '@angular/core';

@Component({
  selector: 'app-hoverbox',
  imports: [],
  template: `<div (mouseover)="setColor('blue')" (mouseleave)="setColor('black')" [style.color]="colorVar" style=" padding: 20px; border: 1px solid black; display: inline-block;">Survolez-moi</div>`,
  styleUrl: './hoverbox.component.css'
})
export class HoverboxComponent {
  colorVar = 'red';

  setColor(newColor: string) {
    this.colorVar = newColor;
  }
}
