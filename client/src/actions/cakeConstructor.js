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
// loadLayersSuccess is an asynchronous action creator function, made possible by redux-thunk
export const loadLayersSuccess = () => {
  return dispatch => {
  	// Execute async code here to fetch layers from my Rails API backend server.
  	// After the async code is done and I've gotten a JSON response back from my server,
  	// (which contains the array of layers objects)
  	// I will invoke dispatch() function to dispatch the action object
  	// that is returned by calling a synchronous action creator function called setLayers, 
  	// which I'm about to define!
  };
};

// stackLayer action creator arrow function accepts a layer object as an argument
// and implicitly returns an action object of type 'STACK_LAYER'
// which also contains a payload of the layer being stacked on top of the cake

// unstackLayer action creator arrow function accepts a layer as an argument
// and implicitly returns an action object of type 'UNSTACK_LAYER'
// which also contains a payload of the layer being unstacked from the cake

// loadLayersSuccess asynchronous action creator function will be invoked to initialize, 
// or load, the layers that I can use in the CakeConstructor container class component.
// loadLayersSuccess asynchronous action creator function returns a function that receives the dispatch function as its argument.
// Inside the body of the returned function, I execute asynchronous code to fetch layers from my Rails API backend server.
// Once that async code is done and I've received a JSON response from my server
// that contains the array of layer objects,
// dispatch function is called inside the body of the returned function
// to dispatch the action object which is returned by invoking my synchronous action creator function, setLayers