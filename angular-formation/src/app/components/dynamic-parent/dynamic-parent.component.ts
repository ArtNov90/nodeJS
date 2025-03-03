import { Component } from '@angular/core';
import { Child1Component, Child2Component, Child3Component } from '../parent-outlet/parent-outlet.component';
import { CommonModule } from '@angular/common';

@Component({
  imports:[CommonModule],
  selector: 'app-dynamic-parent',
  template: `
    <select (change)="selectComponent($event)">
      <option *ngFor="let comp of components; let i = index" [value]="i">{{ comp.name }}</option>
    </select>
    <ng-container *ngComponentOutlet="selectedComponent"></ng-container>
  `
})
export class DynamicParentComponent {
  components = [Child1Component, Child2Component, Child3Component];
  selectedComponent = this.components[0];

  selectComponent(component: Event) {
    let selectedValue = (component.target as HTMLSelectElement).selectedIndex;
    this.selectedComponent = this.components[selectedValue] || this.components[0];
  }
}
