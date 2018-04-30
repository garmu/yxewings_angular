import * as actions from './restaurants.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, State } from '@ngrx/store';
import { Restaurant } from './restaurant';

export const restaurantAdapter = createEntityAdapter<Restaurant>();

export interface RestaurantState extends EntityState<Restaurant> { }

const defaultRestaurants = null;

export const initialState: RestaurantState = restaurantAdapter.getInitialState(defaultRestaurants);


export function restaurantsReducer(
    state: RestaurantState = initialState,
    action: actions.RestaurantsActions) {

    switch (action.type) {
        case actions.FETCH:
            return restaurantAdapter.getInitialState();

        case actions.FETCH_SUCCESS:
            return restaurantAdapter.addMany(action.payload, state);

        default:
            return state;
    }
}

export const getRestaurantState = createFeatureSelector<RestaurantState>('restaurants');

export const {
    selectIds: selectUserIds,
    selectEntities: selectRestaurantEntities,
    selectAll: selectAllRestaurants,
    selectTotal: selectRestaurantTotal
  } = restaurantAdapter.getSelectors(getRestaurantState);

