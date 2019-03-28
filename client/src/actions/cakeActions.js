import * as actionTypes from './actionTypes';
// Thanks to redux-thunk, I return a function inside of my action creator instead of a plain JS action object. 
// The returned function receives the store's dispatch function as its argument, which I then use 
// to dispatch actions from inside of the returned function.
// I first dispatch an action to state that I'm about to make an request to my Rails API backend
// I make this request. 
// I do not hit then() function until the response is received.
// Therefore, I am not dispatching the action of type 'FETCH_CAKES_SUCCESS' until I receive this cakes payload.
// Then I am able to send along that array of cake objects to the Redux store by dispatching an action object
// of type 'FETCH_CAKES_SUCCESS', which updates the Redux store with the returned cakes data
export function fetchCakes() {
  return dispatch => {
    dispatch({ type: 'IMPENDING_REQUEST_FOR_CAKES' })
    return fetch('http://localhost:3001/api/v1/cakes')
      .then(response => response.json())
      .then(cakes => dispatch(cakesPayloadActionCreator(cakes)));
      .catch(error => throw(error))
  };
}
// The action creator function below will implicitly return an action object 
// that contains the cakes payload retrieved from my Rails API backend
// to be dispatched to the Redux store
const cakesPayloadActionCreator = cakes => ({
  type: actionTypes.FETCH_CAKES_SUCCESS,
  cakes
})