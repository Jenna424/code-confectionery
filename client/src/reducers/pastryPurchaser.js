import * as types from '../actions/actionTypes';

const initialState = {
  cakes: [],
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PURCHASE_PASTRY_SUCCESS:
      return { // return new, updated state object
        ...state, // copy over all key/value pairs from the old, previous, existing state objects
        cakes: [...state.cakes, action.cake] // set cakes = to a new array to maintain immutability. Copy over all cake object elements from the previous cakes array, and then push the cake object just added (received as the payload in the action dispatched) onto the end of this new array. An alternative way of writing this -- cakes: state.cakes.concat(action.cake)
      };
    case types.PURCHASE_PASTRY_FAILURE:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}