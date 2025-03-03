import { Routes } from '@angular/router';
import { RoutingPremierComponent } from './routing-premier/routing-premier.component';
import { RoutingSecondComponent } from './routing-second/routing-second.component';
import { RoutingThirdComponent } from './routing-third/routing-third.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserSettingComponent } from './user/user-setting/user-setting.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: "", component: AppComponent }, 
    { path: "first/:id", component: RoutingPremierComponent },
    {
        path: "second", component: RoutingSecondComponent, children: [
            { path: "third", component: RoutingThirdComponent }
        ]
    },
    {
        path: 'user/:userId', component: UserComponent,
        children: [
            { path: 'info', component: UserInfoComponent },
            { path: 'settings', component: UserSettingComponent },
        ]
    },
    { path: '404', component: NotFoundComponent },
    // { path: '**', redirectTo: '/404' }
];