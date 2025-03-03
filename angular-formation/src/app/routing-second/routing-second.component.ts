import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-second',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './routing-second.component.html',
  styleUrl: './routing-second.component.css'
})
export class RoutingSecondComponent {

}
