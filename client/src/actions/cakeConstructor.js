import * as types from './actionTypes';

export const stackLayer = flavor => ({
  type: types.STACK_LAYER,
  flavor
})

export const unstackLayer = flavor => ({
  type: types.UNSTACK_LAYER,
  flavor
})