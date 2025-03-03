import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  nom : string = '';

  utilisateur = {
    nom:"",
    email:""
  };

  genre: string ="Femme";

  pays: string = "France";

  onSubmit(){
    console.log('Formulaire soumis! ', this.utilisateur, this.genre, this.pays);
  }


}