import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { ButtonComponent } from './button/button.component';
import { HoverBoxComponent } from './hover-box/hover-box.component';
import { KeyTrackerComponent } from './key-tracker/key-tracker.component';
import { LoginStatusComponent } from './login-status/login-status.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { FormComponent } from './form/form.component';
import { FromGroupComponent } from './from-group/from-group.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';





@Component({
  selector: 'app-root',
  imports: [CommonModule, ModalComponent, ChildOneComponent, ChildTwoComponent, ChildThreeComponent,
    ButtonComponent,HoverBoxComponent,KeyTrackerComponent,LoginStatusComponent,UserRoleComponent,UserStatusComponent,FormComponent,FromGroupComponent,HomeComponent,RouterOutlet,RouterLink ,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  components: { name: string; component: any }[] = [
    { name: 'Composant 1', component: ChildOneComponent },
    { name: 'Composant 2', component: ChildTwoComponent },
    { name: 'Composant 3', component: ChildThreeComponent }
  ];

  selectedComponent: any = null;

  openModalFromEvent(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).value;
    //this.openModal(this.components[selectedIndex].component);
  }

  openModal(component: any) {
    this.selectedComponent = component;
  }
  closeModal() {
    this.selectedComponent = null;
  }
}
