import * as types from '../actions/actionTypes';

const initialState = {
  layers: [], // initially set = to an empty array, layers will ultimately store an array of layer objects fetched asynchronously from my Rails API backend
  cakeLayout: {}, // initially set = to an empty object, cakeLayout will ultimately store an object that represents the architecture of the cake currently being constructed. Each key in this object will be a string flavor, and its corresponding value will be the number of layers in the cake with that particular flavor
  lastLayerLevered: null,
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
  	  	cakeLayout: { // set cakeLayout to a new JS object to maintain immutability
  	  	  ...state.cakeLayout, // using spread operator, I distribute all key/value pairs from the old cakeLayout object into the new one
  	  	  [action.layer.flavor]: state.cakeLayout[action.layer.flavor] + 1 // using bracket syntax, I dynamically override a given key/value pair in the cakeLayout object. I got a layer object as a payload from my dispatched action object.
  	  	},
  	  	cakeCost: state.cakeCost + CAKE_COMPONENT_COSTS[action.layer.pastryPart]
  	  };
  	case types.UNSTACK_LAYER:
  	  return {
  	  	...state,
  	  	cakeLayout: {
  	  	  ...state.cakeLayout,
  	  	  [action.layer.flavor]: state.cakeLayout[action.layer.flavor] - 1
  	  	},
  	  	cakeCost: state.cakeCost - CAKE_COMPONENT_COSTS[action.layer.pastryPart]
  	  };
    case types.SET_LAYERS_SUCCESS: // this is executed whenever I successfully fetch layers from my Rails server
      return { // return a new, updated state object
        ...state, // copy over all key/value pairs from old, previous, existing state object
        layers: action.layers, // setLayersSuccess action creator function returned an action object w/ layers key pointing to layers payload (an array of layer objects that I got back in JSON response from server)
        error: false // set error to false to clear it in case I previously got an error that has since been resolved
      };
    case types.FETCH_LAYERS_FAILURE:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
// layers is an array of all layer objects fetched from my Rails server in CakeConstructor container class component's componentDidMount() lifecycle method.
// Each layer object in this array has key/value pairs for flavor and pastryPart.
// cakeLayout is an object representing the architecture of the current layer cake being constructed
// each key in the cakeLayout object is a string flavor,
// and its corresponding value is the number of layers in the cake with that particular flavor