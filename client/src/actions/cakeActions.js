import * as actionTypes from './actionTypes';
// Thanks to redux-thunk, I return a function inside of my action creator instead of a plain action object. 
// The returned function receives the store's dispatch function, which I then use 
// to dispatch actions from inside of the returned function.
// I first dispatch an action to state that I'm about to make a request to our Rails API backend
// I make the request. 
// I do not hit then() function until the response is received,
// so I am not dispatching the action of type 'FETCH_CAKES_SUCCESS' until I receive this cakes payload 
// Thus I am able to send along that array of cake objects to the store by dispatching an action object
// to update the Redux store with this returned data 
export function fetchCakes() {
  return dispatch => {
  	dispatch({ type: 'IMPENDING_REQUEST_TO_RETRIEVE_CAKES' })
    return fetch('http://localhost:3001/api/v1/cakes')
      .then(response => response.json())
      .then(cakes => dispatch(cakesPayloadActionCreator(cakes)));
      .catch(error => throw(error))
  };
}
// The action creator function below will return an action object 
// that contains the cakes payload retrieved from my Rails API backend
// so that this array of cake objects can be dispatched to the Redux store
const cakesPayloadActionCreator = cakes => ({
  type: actionTypes.FETCH_CAKES_SUCCESS,
  cakes
})