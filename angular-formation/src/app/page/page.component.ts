import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { TitreComponent } from '../titre/titre.component';

@Component({
  selector: 'app-page',
  imports: [TitreComponent, WelcomeComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
