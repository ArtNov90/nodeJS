import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({ selector: 'app-child1', template: '<p>Composant 1</p>' })
export class Child1Component {}

@Component({ selector: 'app-child2', template: '<p>Composant 2</p>' })
export class Child2Component {}

@Component({ selector: 'app-child3', template: '<p>Composant 3</p>' })
export class Child3Component {}

@Component({
  imports:[CommonModule],
  selector: 'app-parent-outlet',
  template: `
    <ng-container *ngComponentOutlet="child1"></ng-container>
    <ng-container *ngComponentOutlet="child2"></ng-container>
    <ng-container *ngComponentOutlet="child3"></ng-container>
  `
})
export class ParentComponent {
  child1 = Child1Component;
  child2 = Child2Component;
  child3 = Child3Component;
}
