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
  	  return {
  	  	...state,
  	  	layers: {
  	  	  ...state.layers,
  	  	  [action.layer.flavor]: state.layers[action.layer.flavor] + 1
  	  	},
  	  	cakeCost: state.cakeCost + CAKE_COMPONENT_COSTS[action.layer.pastryPart]
  	  }
  }
}

// layers is an object representing all of the layers in the layer cake
// each key in the layers object is a string flavor,
// and its corresponding value is the number of layers in the cake with that particular flavor