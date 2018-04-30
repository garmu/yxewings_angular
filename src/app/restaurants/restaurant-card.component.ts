import { Restaurant, Day } from './restaurant';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-restaurant-card',
    templateUrl: './restaurant-card.component.html',
    styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {
    @Input() public restaurant: Restaurant;
    @Input() public selectedDay: Day;

    public isMonday(): boolean {
        return Day.Monday === this.selectedDay;
    }
    public isTuesday(): boolean {
        return Day.Tuesday === this.selectedDay;
    }
    public isWednesday(): boolean {
        return Day.Wednesday === this.selectedDay;
    }
    public isThursday(): boolean {
        return Day.Thursday === this.selectedDay;
    }
    public isFriday(): boolean {
        return Day.Friday === this.selectedDay;
    }
    public isSaturday(): boolean {
        return Day.Saturday === this.selectedDay;
    }
    public isSunday(): boolean {
        return Day.Sunday === this.selectedDay;
    }
}
