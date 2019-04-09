import * as types from './actionTypes';
import { clearCakeConstructor } from './layerLeveler';

const BASE_URL = process.env.REACT_APP_API_URL;

// Synchronous action creator functions that involve the cake creation process:
export const purchasePastrySuccess = pastry => ({
  type: types.PURCHASE_PASTRY_SUCCESS,
  pastry
})

export const purchasePastryFailure = error => ({
  type: types.PURCHASE_PASTRY_FAILURE,
  error
})
// Asynchronous action creator function that involves the cake creation process:
export const createCake = cake => {
  return dispatch => {
    return fetch(`${BASE_URL}/cakes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cake: cake })
    })
      .then(response => response.json())
      .then(cake => {
        dispatch(purchasePastrySuccess(cake))
        dispatch(clearCakeConstructor())
      })
      .catch(error => dispatch(purchasePastryFailure(error)))
  }
}
// Synchronous action creator functions that involve the process of fetching cakes from my Rails API backend server
export const setCakesSuccess = cakes => ({
  type: types.SET_CAKES_SUCCESS,
  cakes
})

export const fetchCakesFailure = () => ({
  type: types.FETCH_CAKES_FAILURE
})
// loadCakes is an asynchronous action creator function, made possible by redux-thunk, that handles the process of fetching cakes from my Rails API backend server
export const loadCakes = () => {
  return dispatch => {
    return fetch(`${BASE_URL}/cakes`) // make async call to fetch cakes from my Rails API backend server
      .then(response => response.json()) // handle promises. Once promises are resolved, after the async code is done and I've gotten a successful JSON response back from my server, which contains the array of cake objects,
      .then(cakes => dispatch(setCakesSuccess(cakes))) // dispatch the action object that is returned by calling synchronous action creator function setCakesSuccess with this array of cake objects as its argument.
      .catch(error => dispatch(fetchCakesFailure())) // However, if my request to fetch cakes from my Rails server failed, I want to adjust my error key = true in Redux store state. To this end, I dispatch the action object that is returned by calling synchronous action creator function fetchCakesFailure()
  };
};