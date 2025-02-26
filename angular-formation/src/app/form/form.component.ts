import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  language: string = 'Français';
  formSubmitted: boolean = false;

  submitForm() {
    if (this.name.length >= 3 && this.validateEmail(this.email) && this.message.length >= 10) {
      this.formSubmitted = true;
    }
  }

  validateEmail(email: string): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  }
}
