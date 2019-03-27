import * as types from './actionTypes';

export const addLayer = flavor => ({
  type: types.ADD_LAYER,
  flavor
})

export const removeLayer = flavor => ({
  type: types.REMOVE_LAYER,
  flavor
})