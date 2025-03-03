import { Component } from '@angular/core';

@Component({
  selector: 'app-permissions',
  imports: [],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.css'
})
export class PermissionsComponent {
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
