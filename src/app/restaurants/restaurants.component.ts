import { Day, ViewRestaurant } from './restaurant';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, shareReplay, take, first } from 'rxjs/operators';
import * as actions from './restaurants.actions';
import * as reducer from './restaurants.reducer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SelectDay } from './restaurants.actions';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {

    public isLoading$: Observable<boolean>;
    public restaurants$: Observable<ViewRestaurant[]>;
    public isMonday$: Observable<boolean>;
    public isTuesday$: Observable<boolean>;
    public isWednesday$: Observable<boolean>;
    public isThursday$: Observable<boolean>;
    public isFriday$: Observable<boolean>;
    public isSaturday$: Observable<boolean>;
    public isSunday$: Observable<boolean>;

    constructor(private store: Store<any>) {

        const state$ = this.store.select('restaurants');

        this.restaurants$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.viewRestaurants)
        );

        this.isLoading$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.loading)
        );

        this.isMonday$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.day === Day.Monday)
        );
        this.isTuesday$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.day === Day.Tuesday)
        );
        this.isWednesday$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.day === Day.Wednesday)
        );
        this.isThursday$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.day === Day.Thursday)
        );
        this.isFriday$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.day === Day.Friday)
        );
        this.isSaturday$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.day === Day.Saturday)
        );
        this.isSunday$ = state$.pipe(
            map((state: reducer.RestaurantState) => state.day === Day.Sunday)
        );

        this.store.dispatch(new actions.Fetch());
    }

    public selectMonday(): void {
        this.store.dispatch(new SelectDay(Day.Monday));
    }
    public selectTuesday(): void {
        this.store.dispatch(new SelectDay(Day.Tuesday));
    }
    public selectWednesday(): void {
        this.store.dispatch(new SelectDay(Day.Wednesday));
    }
    public selectThursday(): void {
        this.store.dispatch(new SelectDay(Day.Thursday));
    }
    public selectFriday(): void {
        this.store.dispatch(new SelectDay(Day.Friday));
    }
    public selectSaturday(): void {
        this.store.dispatch(new SelectDay(Day.Saturday));
    }
    public selectSunday(): void {
        this.store.dispatch(new SelectDay(Day.Sunday));
    }
}
