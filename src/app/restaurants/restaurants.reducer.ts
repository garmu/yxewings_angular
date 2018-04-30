import * as actions from './restaurants.actions';
    import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, State } from '@ngrx/store';
import { Restaurant, Day, WeeklySpecialsContainer, ViewRestaurant } from './restaurant';

export interface RestaurantState {
    loading: boolean; // indicates loading while fetching data
    allRestaurants: Restaurant[];
    viewRestaurants: ViewRestaurant[];
    day: Day;
  }

const defaultRestaurants: RestaurantState = {
    loading: false,
    day: Day.Monday,
    allRestaurants: null,
    viewRestaurants: null
};

export function restaurantsReducer(
    state: RestaurantState = defaultRestaurants,
    action: actions.RestaurantsActions): RestaurantState {

    switch (action.type) {
        case actions.FETCH: {
            return {
                ...state,
                loading: true
            };
        }
        case actions.FETCH_SUCCESS: {
            const restaurants: Restaurant[] = filterByDay(action.payload, state.day);
            const viewRestaurants: ViewRestaurant[] = restaurants
                .map(restaurant => new ViewRestaurant({
                    id: restaurant.id,
                    info: restaurant.info,
                    specials: WeeklySpecialsContainer.getSpecialsForDay(restaurant.weeklySpecialsContainer, state.day)
                }));
            return {
                ...state,
                allRestaurants: restaurants,
                viewRestaurants: viewRestaurants,
                loading: false
            };
        }
        case actions.SELECT_DAY: {
            const filteredRestaurants: Restaurant[] = filterByDay(state.allRestaurants, action.payload);
            const viewRestaurants: ViewRestaurant[] = filteredRestaurants
                .map(restaurant => new ViewRestaurant({
                    id: restaurant.id,
                    info: restaurant.info,
                    specials: WeeklySpecialsContainer.getSpecialsForDay(restaurant.weeklySpecialsContainer, action.payload)
                }));
            return {
                ...state,
                viewRestaurants: viewRestaurants,
                day: action.payload
            };
        }
        default:
            return state;
    }
}

function filterByDay(restaurants: Restaurant[], day: Day): Restaurant[] {
    return restaurants.filter(restaurant => WeeklySpecialsContainer.hasSpecialsForDay(restaurant.weeklySpecialsContainer, day));
}
