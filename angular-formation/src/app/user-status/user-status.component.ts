import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status',
  imports: [CommonModule],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {
  isLoggedIn = false;
  hasSubscription = false;
  isAdmin = false;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleSubscription() {
    this.hasSubscription = !this.hasSubscription;
  }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
