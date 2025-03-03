import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-group',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './formulaire-group.component.html',
  styleUrl: './formulaire-group.component.css'
})
export class FormulaireGroupComponent {

  formulaire: FormGroup;


  constructor(private fb: FormBuilder) {
    this.formulaire = this.fb.group(
      {
        nom: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(10)]],
        langue: ["", [Validators.required]]
      }
    )
  }

  onSubmit() {
    alert("Formulaire soumis");
    console.log('Formulaire soumis! ', this.formulaire.value);
  }

}
