import * as types from './actionTypes';
// synchronous action creators:
export const stackLayer = layer => ({
  type: types.STACK_LAYER,
  layer
})

export const unstackLayer = layer => ({
  type: types.UNSTACK_LAYER,
  layer
})

// stackLayer action creator arrow function accepts a layer object as an argument
// and implicitly returns an action object of type 'STACK_LAYER'
// which also contains a payload of the layer being stacked on top of the cake

// unstackLayer action creator arrow function accepts a layer as an argument
// and implicitly returns an action object of type 'UNSTACK_LAYER'
// which also contains a payload of the layer being unstacked from the cake