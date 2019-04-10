import * as types from '../actions/actionTypes';
import { dynamicallyDeleteKey } from '../utils/logic';

const initialState = {
  layers: [], // initially set = to an empty array, layers will ultimately store an array of layer objects fetched asynchronously from my Rails API backend
  cakeLayout: [], // an array of layer objects that describes the order in which cake layers are stacked, from the base up
  cakeCost: 0,
  error: false,
  layerCreationCompleted: false
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
    case types.CREATE_LAYER_SUCCESS:
      return { // return new, updated state object
        ...state, // copy over all key/value pairs from the old, previous, existing state object
        layers: [...state.layers, action.layer], // set layers = to a new array to maintain immutability. Copy over all layer object elements from the previous layers array, and then push the layer object just added (received as the payload in the action dispatched) onto the end of this new array. An alternative way of writing this -- layers: state.layers.concat(action.layer)
        error: false, // set error to false to clear it in case I previously got an error that has since been resolved,
        layerCreationCompleted: true
      };
    case types.CREATE_LAYER_FAILURE:
      return {
        ...state,
        error: true
      };
    case types.STACK_LAYER:
      return { // return new, updated state object
        ...state, // copy over all key/value pairs from the old, previous, existing state object, but remember: this does NOT create a deep clone (it does NOT go into objects and create new nested objects)
        cakeLayout: [...state.cakeLayout, action.layer], // set cakeLayout = to a new array to maintain immutability. Copy over all layer object elements from the previous cakeLayout array, and then push the layer object just added (received as the payload in the action dispatched) onto the end of this new array
        cakeCost: state.cakeCost + CAKE_COMPONENT_COSTS[action.layer.pastry_part],
        error: false
      };
    case types.UNSTACK_LAYER:
      return {
        ...state,
        cakeLayout: state.cakeLayout.slice(0, -1), // Removing the last array element. Note: this is fine because .slice() is nondestructive
        cakeCost: state.cakeCost - CAKE_COMPONENT_COSTS[action.layer.pastry_part],
        error: false
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
    case types.CLEAR_CAKE_CONSTRUCTOR:
      const initialStateWithoutLayers = dynamicallyDeleteKey(initialState, 'layers');
      return {
        layers: [...state.layers],
        ...initialStateWithoutLayers,
        error: false
      }
    default:
      return state;
  }
}
// layers is an array of all layer objects fetched from my Rails server in CakeConstructor container class component's componentDidMount() lifecycle method.
// Each layer object in this array has key/value pairs for flavor and pastry_part.
// cakeLayout is the array of layer objects that comprise the cake currently being created