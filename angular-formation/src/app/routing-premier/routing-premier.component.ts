import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-premier',
  imports: [],
  templateUrl: './routing-premier.component.html',
  styleUrl: './routing-premier.component.css'
})
export class RoutingPremierComponent {

  userId: string | null = '';

  constructor(private route: ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
