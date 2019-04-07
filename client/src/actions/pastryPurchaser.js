import * as types from './actionTypes';
const BASE_URL = process.env.REACT_APP_API_URL;

// Synchronous action creator functions:
export const purchasePastrySuccess = pastry => ({
  type: types.PURCHASE_PASTRY_SUCCESS,
  pastry
})

export const purchasePastryFailure = error => ({
  type: types.PURCHASE_PASTRY_FAILURE,
  error
})
// Asynchronous action creator function:
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
        console.log(cake)
      })
      .catch(error => dispatch(purchasePastryFailure(error)))
  }
}