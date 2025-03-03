import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideStore, StoreModule} from '@ngrx/store';
import { counterReducer } from './app/store/counter.reducer';
import { provideEffects } from '@ngrx/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({count: counterReducer}),
    provideEffects([]),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));