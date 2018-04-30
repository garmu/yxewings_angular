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
import { MatCardModule, MatToolbarModule } from '@angular/material';
import { RestaurantCardComponent } from './restaurant-card.component';

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
    EffectsModule.forRoot([RestaurantEffects]),
    MatCardModule,
    MatToolbarModule
  ],
  declarations: [RestaurantsComponent, RestaurantCardComponent],
  exports: [RestaurantsComponent, RestaurantCardComponent],
  providers: [
    RestaurantsService
]
})
export class RestaurantsModule { }
