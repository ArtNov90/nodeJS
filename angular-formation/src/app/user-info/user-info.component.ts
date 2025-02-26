import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  name = signal('Arthur'); // Nom par défaut
  age = signal(16); // Âge par défaut

  // Message généré dynamiquement avec computed()
  userInfo = computed(() => `Bonjour, je m'appelle ${this.name()} et j'ai ${this.age()} ans.`);

  // Effect pour afficher les changements dans la console
  userEffect = effect(() => {
    console.log(`Utilisateur: ${this.name()}, Âge: ${this.age()}`);
  });

  // Effect pour afficher une erreur si l'utilisateur est mineur
  minorEffect = effect(() => {
    if (this.age() < 18) {
      console.error('Erreur : L\'utilisateur est mineur !');
    }
  });
  // Méthode pour mettre à jour le nom
  updateName(event: Event) {
    const newName = (event.target as HTMLInputElement).value;
    this.name.set(newName);
    console.log(`Nom mis à jour : ${newName}`);
  }

  // Méthode pour mettre à jour l'âge
  updateAge(event: Event) {
    const newAge = parseInt((event.target as HTMLInputElement).value, 10) || 0;
    this.age.set(newAge);
    console.log(`Âge mis à jour : ${newAge}`);
  }
}
