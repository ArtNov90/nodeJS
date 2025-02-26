import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  profession = input<string>();
  annee = input.required<number>();

  message = output<string>();

  sendMessage(){
    this.message.emit("Hello");
  }
}
