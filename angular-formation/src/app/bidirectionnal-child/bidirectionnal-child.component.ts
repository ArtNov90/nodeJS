import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-bidirectionnal-child',
  imports: [],
  templateUrl: './bidirectionnal-child.component.html',
  styleUrl: './bidirectionnal-child.component.css'
})
export class BidirectionnalChildComponent {
  name = input<string>();
  nameChange = output<string>();

  nameChanged(event : Event){
    const newValue = (event.target as HTMLInputElement).value;
    this.nameChange.emit(newValue);
    }
}
