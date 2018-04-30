import * as actions from './restaurants.actions';
    import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, State } from '@ngrx/store';
import { Restaurant } from './restaurant';

export interface RestaurantState {
    loading: boolean; // indicates loading while fetching data
    restaurants: Restaurant[];
  }

const defaultRestaurants: RestaurantState = {
    loading: false,
    restaurants: null
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
            return {
                restaurants: action.payload,
                loading: false
            };
        }
        default:
            return state;
    }
}
