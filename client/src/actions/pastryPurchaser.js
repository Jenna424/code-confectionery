import * as types from './actionTypes';
import { clearCakeConstructor } from './layerLeveler';

const BASE_URL = process.env.REACT_APP_API_URL;

// Synchronous action creator functions that involve cake creation process:
export const purchasePastrySuccess = pastry => ({
  type: types.PURCHASE_PASTRY_SUCCESS,
  pastry
})

export const purchasePastryFailure = error => ({
  type: types.PURCHASE_PASTRY_FAILURE,
  error
})
// Asynchronous action creator function that involves cake creation process:
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
// Synchronous action creator functions that involve fetching cakes from my Rails API backend server
export const setCakesSuccess = cakes => ({
  type: types.SET_CAKES_SUCCESS,
  cakes
})

export const fetchCakesFailure = () => ({
  type: types.FETCH_CAKES_FAILURE
})