import { Component, computed, effect, signal } from '@angular/core';
import { SecondComponent } from "../second/second.component";

@Component({
  selector: 'app-premier',
  imports: [SecondComponent],
  templateUrl: './premier.component.html',
  styleUrl: './premier.component.css'
})
export class PremierComponent {

  counter = signal(0);
  firstName = signal('Morgan');

  firstNameCapitalized = computed( () => this.firstName().toUpperCase());


  constructor(){
    this.init();
  }

  init(){
    effect(() => {
      console.log(this.firstName());
    })
  }

  increment(){
    this.counter.set(this.counter() + 1);
    this.firstName.set("Clément")
    
  }

}
