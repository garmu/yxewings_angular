import { Restaurant } from './restaurant';
import { Component, Input } from '@angular/core';


interface RestaurantState {
    restaurants: Restaurant[];
}

@Component({
    selector: 'app-restaurant-card',
    templateUrl: './restaurant-card.component.html',
    styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {
    @Input() public restaurant: Restaurant;

}
