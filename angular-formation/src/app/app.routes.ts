import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: "user/:id", component: UserComponent }
];
