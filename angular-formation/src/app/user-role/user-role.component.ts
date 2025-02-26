import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-role',
  imports: [CommonModule],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.css'
})
export class UserRoleComponent {

  role: string = 'utilisateur'; // Valeur par défaut

  changeRole(event: Event) {
    this.role = (event.target as HTMLSelectElement).value;
  }
}
