import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WelcomeWithNameComponent } from "./welcome-with-name/welcome-with-name.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { BidirectionnalParentComponent } from "./bidirectionnal-parent/bidirectionnal-parent.component";
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "./pagination/pagination/pagination.component";
import { AppListComponent } from "./app-list/app-list.component";
import { CardComponent } from "./components/card-component/card-component.component";
import { DynamicParentComponent } from "./components/dynamic-parent/dynamic-parent.component";
import { ParentComponent } from "./components/parent-outlet/parent-outlet.component";
import { ModalComponent} from "./components/modal/modal.component";
import { ButtonComponent } from "./events/button/button.component";
import { HoverboxComponent } from "./events/hoverbox/hoverbox.component";
import { KeytrackerComponent } from "./events/keytracker/keytracker.component";
import { ConnectionComponent } from "./conditions/connection/connection.component";
import { PermissionsComponent } from "./conditions/permissions/permissions/permissions.component";
import { RoleSwitchComponent } from "./conditions/role-switch/role-switch/role-switch.component";
import { FormulaireComponent } from "./formulaire/formulaire/formulaire.component";
import { FormulaireGroupComponent } from "./formulaire/formulaire-group/formulaire-group/formulaire-group.component";
import { StockDisplayComponentComponent } from "./lifecycle/stock-display/stock-display.component";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrease, increment, incrementByNumber, reset } from './store/counter.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, StockDisplayComponentComponent, CommonModule,FormulaireGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formation-Angular';

  professionParent = signal("Eleve");

  receivedMessage: string = "";

  names = ["Alice", "Bob", "Charlie"];

  currentPage = signal<number>(1);

  quantity = 100;
  change = 10;

  increase(){
    this.quantity= this.quantity + 10;
  }

  decrease(){
    this.quantity= this.quantity - 20;
  }

  selectedComponent = PaginationComponent;

  receiveMessage(message: string){
    console.log('Données reçues de l’enfant:', message);
    this.receivedMessage = message;
  }

  modify(){
    this.professionParent.set("Professeur")
  }

  users = [
    { id : 1, name : "Alice", age : 25 },
    { id : 2, name : "Bob", age : 30 },
    { id : 3, name : "Charlie", age : 35 }
  ];

  trackById(index: number, name: any){
    return name.id;
  }

  suivant(){
    this.currentPage.set(this.currentPage() + 1);
  }

  console(){
    console.log("console")
  }

  isLoggedIn = true;
  isPremium = true;

  condition = "c";

  count$: Observable<number>

  constructor(private store: Store<{count: number}>){
    this.count$ = store.select('count');
  }

  incrementStore(){
    this.store.dispatch(increment())
  }

  decreaseStore(){
    this.store.dispatch(decrease())
  }

  resetStore(){
    this.store.dispatch(reset())
  }

  incrementByNumberStore(number : number){
    this.store.dispatch(incrementByNumber({combien: number}))
  }
}