import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Ajout nécessaire pour *ngIf et autres directives


@Component({
  selector: 'app-from-group',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './from-group.component.html',
  styleUrl: './from-group.component.css'
})
export class FromGroupComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    language: new FormControl('Français') // Valeur par défaut
  });

  formSubmitted: boolean = false;

  submitForm() {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
    }
  }

  // Méthode pour récupérer les contrôles facilement dans le HTML
  get form() {
    return this.contactForm.controls;
  }

}
