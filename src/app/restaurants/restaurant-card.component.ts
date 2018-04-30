import { Day, ViewRestaurant } from './restaurant';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-restaurant-card',
    templateUrl: './restaurant-card.component.html',
    styleUrls: ['./restaurant-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantCardComponent {
    @Input() public restaurant: ViewRestaurant;
}
