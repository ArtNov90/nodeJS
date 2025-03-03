import { Component, model } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  page = model(1);

  pageChanged(event : Event){
    let newValue: number  = parseInt((event.target as HTMLInputElement).value);
    this.page.set(newValue);
  }
}
