import * as types from './actionTypes';
// synchronous action creators:
export const stackLayer = flavor => ({
  type: types.STACK_LAYER,
  flavor
})

export const unstackLayer = flavor => ({
  type: types.UNSTACK_LAYER,
  flavor
})

// stackLayer action creator arrow function accepts a string flavor as an argument
// (a key/value pair property of a layer object)
// and implicitly returns an action object of type 'STACK_LAYER'
// which also contains a payload of the flavor of the layer being stacked on top of the cake

// unstackLayer action creator arrow function accepts a string flavor as an argument
// (a key/value pair property of a layer object)
// and implicitly returns an action object of type 'UNSTACK_LAYER'
// which also contains a payload of the flavor of the layer being unstacked from the cake