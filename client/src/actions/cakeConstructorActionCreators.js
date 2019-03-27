import * as types from './actionTypes';

export const addLayer = ingredient => ({
  type: types.ADD_LAYER,
  ingredient
})

export const removeLayer = ingredient => ({
  type: types.REMOVE_LAYER,
  ingredient
})