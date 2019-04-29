import * as types from './actionTypes';

export const updateFlavorFormData = flavorFormData => ({
  type: types.UPDATE_FLAVOR_FORM_DATA,
  flavorFormData
})

export const resetFlavorForm = () => ({
  type: types.RESET_FLAVOR_FORM
})