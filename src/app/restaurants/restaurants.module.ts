import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { RestaurantsService } from './restaurants.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { restaurantsReducer } from './restaurants.reducer';
import { RestaurantEffects } from './restaurants.effects';
import { RestaurantsComponent } from './restaurants.component';
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { RestaurantCardComponent } from './restaurant-card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

const FIREBASE_CREDENTIALS = {
    apiKey: 'AIzaSyDSOYxOY6c4whg46sRaKaP-3BuCzX51l4E',
    authDomain: 'yxewings.firebaseapp.com',
    databaseURL: 'https://yxewings.firebaseio.com',
    projectId: 'yxewings',
    storageBucket: 'yxewings.appspot.com',
    messagingSenderId: '578636896786'
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    StoreModule.forRoot({restaurants: restaurantsReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([RestaurantEffects]),
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [RestaurantsComponent, RestaurantCardComponent],
  exports: [RestaurantsComponent, RestaurantCardComponent],
  providers: [
    RestaurantsService
]
})
export class RestaurantsModule { }
