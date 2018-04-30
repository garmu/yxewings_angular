import { Restaurant, Day } from './restaurant';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, shareReplay, take, first } from 'rxjs/operators';
import * as actions from './restaurants.actions';
import * as reducer from './restaurants.reducer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
    public selectedDay$: BehaviorSubject<Day>;
    public isMonday$: Observable<boolean>;
    public isTuesday$: Observable<boolean>;
    public isWednesday$: Observable<boolean>;
    public isThursday$: Observable<boolean>;
    public isFriday$: Observable<boolean>;
    public isSaturday$: Observable<boolean>;
    public isSunday$: Observable<boolean>;

    constructor(private store: Store<any>) {
        this.selectedDay$ = new BehaviorSubject(Day.Monday);
        this.restaurants$ = this.store.select('restaurants').pipe(
            map((state: reducer.RestaurantState) => state.restaurants)
        );
        this.store.dispatch(new actions.Fetch());
        this.isMonday$ = this.selectedDay$.pipe(
            map(selectedDay => selectedDay === Day.Monday)
        );
        this.isTuesday$ = this.selectedDay$.pipe(
            map(selectedDay => selectedDay === Day.Tuesday)
        );
        this.isWednesday$ = this.selectedDay$.pipe(
            map(selectedDay => selectedDay === Day.Wednesday)
        );
        this.isThursday$ = this.selectedDay$.pipe(
            map(selectedDay => selectedDay === Day.Thursday)
        );
        this.isFriday$ = this.selectedDay$.pipe(
            map(selectedDay => selectedDay === Day.Friday)
        );
        this.isSaturday$ = this.selectedDay$.pipe(
            map(selectedDay => selectedDay === Day.Saturday)
        );
        this.isSunday$ = this.selectedDay$.pipe(
            map(selectedDay => selectedDay === Day.Sunday)
        );
    }

    public selectMonday(): void {
        this.selectedDay$.next(Day.Monday);
    }
    public selectTuesday(): void {
        this.selectedDay$.next(Day.Tuesday);
    }
    public selectWednesday(): void {
        this.selectedDay$.next(Day.Wednesday);
    }
    public selectThursday(): void {
        this.selectedDay$.next(Day.Thursday);
    }
    public selectFriday(): void {
        this.selectedDay$.next(Day.Friday);
    }
    public selectSaturday(): void {
        this.selectedDay$.next(Day.Saturday);
    }
    public selectSunday(): void {
        this.selectedDay$.next(Day.Sunday);
    }
}
