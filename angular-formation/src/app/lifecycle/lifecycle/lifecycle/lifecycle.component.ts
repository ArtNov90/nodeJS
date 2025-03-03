import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit {
  
  user = {};
  
  ngOnInit(): void {
    this.user = { name: "John", age: 30, address: "Paris" };
  }

}
