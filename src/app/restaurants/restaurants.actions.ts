import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Restaurant } from './restaurant';


export const FETCH = '[RESTAURANTS] Fetch';
export const FETCH_SUCCESS = '[RESTAURANTS] Fetch Success';
export const SELECT_DAY = '[RESTAURANTS] Select Day';

export class Fetch implements Action {
  readonly type = FETCH;
  constructor() { }
}

export class FetchSuccess implements Action {
  readonly type = FETCH_SUCCESS;
  constructor(public payload: Restaurant[]) {}
}

export class SelectDay implements Action {
    readonly type = SELECT_DAY;
    constructor(public payload: string) {}
}

export type RestaurantsActions =
    | Fetch
    | FetchSuccess;
