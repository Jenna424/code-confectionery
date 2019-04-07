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