import * as types from './actionTypes';
const BASE_URL = process.env.REACT_APP_API_URL;

export const updateFlavorFormData = flavorFormData => ({
  type: types.UPDATE_FLAVOR_FORM_DATA,
  flavorFormData
})

export const resetFlavorForm = () => ({
  type: types.RESET_FLAVOR_FORM
})