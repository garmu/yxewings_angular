import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Restaurant } from './restaurant';


export const FETCH = '[RESTAURANTS] Fetch';
export const FETCH_SUCCESS = '[RESTAURANTS] Fetch Success';

export class Fetch implements Action {
  readonly type = FETCH;
  constructor() { }
}

export class FetchSuccess implements Action {
  readonly type = FETCH_SUCCESS;
  constructor(public payload: Restaurant[]) { }
}

export type RestaurantsActions =
    | Fetch
    | FetchSuccess;
