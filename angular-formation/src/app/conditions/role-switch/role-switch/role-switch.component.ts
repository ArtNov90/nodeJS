import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-switch',
  imports: [FormsModule],
  templateUrl: './role-switch.component.html',
  styleUrl: './role-switch.component.css'
})
export class RoleSwitchComponent {
  role: string = 'user';

  selectRole(newRole: Event) {
    console.log(newRole)
    this.role = (<HTMLSelectElement>newRole.target).value;
  }
}
