import { Component, input, output } from '@angular/core';
import { BidirectionnalChildComponent } from "../bidirectionnal-child/bidirectionnal-child.component";

@Component({
  selector: 'app-bidirectionnal-parent',
  imports: [BidirectionnalChildComponent],
  templateUrl: './bidirectionnal-parent.component.html',
  styleUrl: './bidirectionnal-parent.component.css'
})
export class BidirectionnalParentComponent {
  updatedName = "Clément";

  modify(){
    this.updatedName = "Update";
  }


}
