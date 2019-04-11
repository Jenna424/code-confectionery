import * as types from './actionTypes';
import { resetFlavorForm } from './flavorForm';
import history from '../index.js';
const BASE_URL = process.env.REACT_APP_API_URL;

export const createLayerSuccess = layer => ({
  type: types.CREATE_LAYER_SUCCESS,
  layer
})

export const createLayerFailure = error => ({
  type: types.CREATE_LAYER_FAILURE,
  error
})

// proposeFlavoredLayer is an asynchronous action creator function that handles the process of creating a new flavored layer
export const proposeFlavoredLayer = layer => {
  return dispatch => {
    return fetch(`${BASE_URL}/layers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ layer: layer })
    })
      .then(response => response.json())
      .then(layer => {
        dispatch(createLayerSuccess(layer))
        dispatch(resetFlavorForm())
        history.push('/')
      })
      .catch(error => dispatch(createLayerFailure(error)))
  }
}

// synchronous action creators:
export const stackLayer = layer => ({
  type: types.STACK_LAYER,
  layer
})

export const unstackLayer = layer => ({
  type: types.UNSTACK_LAYER,
  layer
})

export const setLayersSuccess = layers => ({
  type: types.SET_LAYERS_SUCCESS,
  layers
})

export const fetchLayersFailure = () => ({
  type: types.FETCH_LAYERS_FAILURE
})
// loadLayers is an asynchronous action creator function, made possible by redux-thunk
export const loadLayers = () => {
  return dispatch => {
    return fetch(`${BASE_URL}/layers`) // make async call to fetch layers from my Rails API backend server
      .then(response => response.json()) // handle promises. Once promises are resolved, after the async code is done and I've gotten a successful JSON response back from my server, which contains the array of layer objects,
      .then(layers => dispatch(setLayersSuccess(layers))) // dispatch the action object that is returned by calling synchronous action creator function setLayersSuccess with this array of layer objects as its argument.
      .catch(error => dispatch(fetchLayersFailure())) // However, if my request to fetch layers from my Rails server failed, I want to adjust my error key = true in Redux store state. To this end, I dispatch the action object that is returned by calling synchronous action creator function fetchLayersFailure()
  };
};

export const clearCakeConstructor = () => ({
  type: types.CLEAR_CAKE_CONSTRUCTOR
})
// stackLayer action creator arrow function accepts a layer object as an argument
// and implicitly returns an action object of type 'STACK_LAYER'
// which also contains a payload of the layer being stacked on top of the cake

// unstackLayer action creator arrow function accepts a layer as an argument
// and implicitly returns an action object of type 'UNSTACK_LAYER'
// which also contains a payload of the layer being unstacked from the cake

// loadLayers asynchronous action creator function will be invoked to initialize, 
// or load, the layers that I can use in the CakeConstructor container class component.
// loadLayers asynchronous action creator function returns a function 
// that receives the dispatch function as its argument.
// Inside the body of the returned function, I execute asynchronous code to fetch layers from my Rails API backend server.
// Once that async code is done and I've received a successful JSON response from my server,
// which contains the array of layer objects,
// the dispatch function is called inside the body of the returned function
// to dispatch the action object which was returned by invoking my synchronous action creator function, setLayersSuccess.
// setLayersSuccess synchronous action creator function accepts the array of layer objects 
// (that I got back in the JSON response from my Rails server) as an argument.
// setLayersSuccess action creator function implicitly returns an action object
// that has a type key set = to 'SET_LAYERS_SUCCESS' and a layers key set = to the layers payload, i.e.,
// the array of layer objects.
// However, if my request to fetch layers from my Rails server failed, 
// I want to adjust my error key = true in Redux store state. 
// To this end, I dispatch the action object that is returned by calling synchronous action creator function fetchLayersFailure()