import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable, Optional, Inject } from '@angular/core';
import { Scheduler } from 'rxjs/Scheduler';
import * as restaurantActions from './restaurants.actions';
import {
    map,
    switchMap,
} from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Restaurant } from './restaurant';
import { RestaurantsService } from './restaurants.service';

@Injectable()
export class RestaurantEffects {
    constructor(private actions: Actions, private service: RestaurantsService) {}

    @Effect()
    getRestaurants: Observable<Action> = this.actions.ofType(restaurantActions.FETCH).pipe(
        switchMap(action => this.service.restaurants$),
        map(restaurants =>  new restaurantActions.FetchSuccess(restaurants))
    );

}
