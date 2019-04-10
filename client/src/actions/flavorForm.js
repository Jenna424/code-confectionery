import * as types from './actionTypes';
const BASE_URL = process.env.REACT_APP_API_URL;

// Synchronous action creator functions that handle the process of creating a new flavored layer:
export const createFlavorSuccess = flavoredLayer => ({
  type: types.CREATE_FLAVOR_SUCCESS,
  flavoredLayer
})

export const createFlavorFailure = error => ({
  type: types.CREATE_FLAVOR_FAILURE,
  error
})