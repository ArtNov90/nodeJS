import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-display-component',
  imports: [CommonModule],
  templateUrl: './stock-display-component.component.html',
  styleUrl: './stock-display-component.component.css'
})
export class StockDisplayComponentComponent implements OnChanges {
  @Input() quantity: number = 0;
  @Input() change: number = 0;
  previousQuantity: number = 0;
  stockStatus: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quantity']) {
      if (changes['quantity'].currentValue < 0) {
        this.quantity = 0;
        alert('Stock négatif !');
      } else {
        this.previousQuantity = changes['quantity'].previousValue;
      }
      this.stockStatus = this.quantity > this.previousQuantity ? 'Augmentation' : 'Baisse';
    }

  }

  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

}
