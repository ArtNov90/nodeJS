import { CommonModule } from '@angular/common';
import { Component, Input, Type } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-modal',
  template: `
    <div class="modal-overlay">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <ng-content></ng-content>
        <ng-container [ngComponentOutlet]="component"></ng-container>
      </div>
    </div>
  `,
  styles: [
    `.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }`,
    `.modal-content { background: white; padding: 20px; border-radius: 5px; }`
  ]
})
export class ModalComponent {
  @Input() component!: Type<any>;
  
}
