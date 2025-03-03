import { Component, effect } from '@angular/core';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  name = signal('Alice');
  age = signal(17);
  email = signal('alice@example.com');
  city = signal('Paris');
  job = signal('Développeuse');

  isMinor = computed( () => this.age() < 18);

  constructor() {
    effect(() => {
      console.log('Profil mis à jour :', {
        name: this.name(),
        age: this.age(),
        email: this.email(),
        city: this.city(),
        job: this.job(),
      });
    });

   effect(() => {
      console.log('Statut de minorité mis à jour :', this.isMinor());
    });
  }

  updateName() {
    this.name.set(prompt('Nouveau nom ?') || this.name());
  }

  updateAge() {
    this.age.set(Number(prompt('Nouvel âge ?') || this.age()));
  }

  updateEmail() {
    this.email.set(prompt('Nouvel email ?') || this.email());
  }

  updateCity() {
    this.city.set(prompt('Nouvelle ville ?') || this.city());
  }

  updateJob() {
    this.job.set(prompt('Nouvelle profession ?') || this.job());
  }
}