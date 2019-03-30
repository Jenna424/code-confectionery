import * as types from '../actions/actionTypes';

const initialState = {
  layers: null, // initially set to null because layers will be fetched asynchronously
  cakeCost: 0, // the cake board is free
  error: false
}

const CAKE_COMPONENT_COSTS = {
  batter: 5.5,
  filling: 4.5,
  frosting: 3.5,
  garnish: 2.5,
  topper: 1.5
}

export default (state = initialState, action) => {
  switch (action.type) {
  	case types.STACK_LAYER:
  	  return { // return new, updated state object
  	  	...state, // copy over all key/value pairs from the old, previous, existing state object, but remember: this does NOT create a deep clone (it does NOT go into objects and create new nested objects)
  	  	layers: { // set layers to a new JS object to maintain immutability
  	  	  ...state.layers, // distribute all key/value pairs in from the old layers object into the new one
  	  	  [action.layer.flavor]: state.layers[action.layer.flavor] + 1 // using bracket syntax, dynamically override the key/value pair for a given layer object, which we'll get as a payload from our dispatched action object
  	  	},
  	  	cakeCost: state.cakeCost + CAKE_COMPONENT_COSTS[action.layer.pastryPart]
  	  }
  	case types.UNSTACK_LAYER:
  	  return {
  	  	...state,
  	  	layers: {
  	  	  ...state.layers,
  	  	  [action.layer.flavor]: state.layers[action.layer.flavor] - 1
  	  	},
  	  	cakeCost: state.cakeCost - CAKE_COMPONENT_COSTS[action.layer.pastryPart]
  	  }
  }
}

// layers is an object representing all of the layers in the layer cake
// each key in the layers object is a string flavor,
// and its corresponding value is the number of layers in the cake with that particular flavor