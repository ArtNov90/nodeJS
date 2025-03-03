import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<div class="card"><ng-content></ng-content></div>`,
  styles: [`.card { border: 1px solid #ccc; padding: 10px; margin: 10px; }`]
})
export class CardComponent {}
