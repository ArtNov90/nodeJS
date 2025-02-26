import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ChildOneComponent } from '../child-one/child-one.component';
import { ChildTwoComponent } from '../child-two/child-two.component';
import { ChildThreeComponent } from '../child-three/child-three.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  imports: [CommonModule,ChildOneComponent,ChildTwoComponent,ChildThreeComponent]
})
export class ParentComponent {
  components = [
    { name: 'Composant 1', component: ChildOneComponent },
    { name: 'Composant 2', component: ChildTwoComponent },
    { name: 'Composant 3', component: ChildThreeComponent }
  ];

  selectedComponent: any = this.components[0].component; // Par défaut, le premier composant

  onComponentChange(event: Event) {
    const selectedIndex = parseInt((event.target as HTMLSelectElement).value, 10);
    this.selectedComponent = this.components[selectedIndex].component;
  }
  
}
