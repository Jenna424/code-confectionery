import * as types from './actionTypes';
const BASE_URL = process.env.REACT_APP_API_URL;

// The two synchronous action creator functions right below handle the process of creating a new flavored layer:
export const createFlavorSuccess = flavoredLayer => ({
  type: types.CREATE_FLAVOR_SUCCESS,
  flavoredLayer
})

export const createFlavorFailure = error => ({
  type: types.CREATE_FLAVOR_FAILURE,
  error
})

export const resetFlavorForm = () => ({
  type: types.RESET_FLAVOR_FORM
})

// Asynchronous action creator function that handles the process of creating a new flavored layer:
export const createFlavoredLayer = layer => {
  return dispatch => {
    return fetch(`${BASE_URL}/layers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ layer: layer })
    })
      .then(response => response.json())
      .then(layer => {
        dispatch(createFlavorSuccess(layer))
        dispatch(resetFlavorForm())
      })
      .catch(error => dispatch(createFlavorFailure(error)))
  }
}

export const updateFlavorFormData = flavorFormData => ({
  type: types.UPDATE_FLAVOR_FORM_DATA,
  flavorFormData
})