import { Restaurant } from './restaurant';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, shareReplay } from 'rxjs/operators';
import * as actions from './restaurants.actions';
import * as fromRestaurants from './restaurants.reducer';

interface RestaurantState {
    restaurants: Restaurant[];
}

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
    public isLoading$: Observable<boolean>;
    public restaurants$: Observable<Restaurant[]>;

    constructor(private store: Store<fromRestaurants.RestaurantState>) {
        this.restaurants$ = this.store.select(fromRestaurants.selectAllRestaurants);

        this.store.dispatch(new actions.Fetch());
        this.restaurants$.subscribe(x => console.log(x));
    }

}
