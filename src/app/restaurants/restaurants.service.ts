import { Injectable } from '@angular/core';
import {
    AngularFireDatabase,
    FirebaseListObservable
} from 'angularfire2/database-deprecated';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs/Observable';
import { shareReplay, map } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';

@Injectable()
export class RestaurantsService {

    private restaurants: Observable<Restaurant[]>;
    constructor(db: AngularFireDatabase) {
        this.restaurants = db.list('/saskatoon/restaurants').pipe(
            map((restaurants): Restaurant[] => restaurants.map(restaurant => new Restaurant(restaurant))),
            shareReplay(1)
        );
  }

  public get restaurants$(): Observable<Restaurant[]> {
    return this.restaurants;
  }
}
