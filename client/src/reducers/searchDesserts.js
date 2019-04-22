import * as types from '../actions/actionTypes';

const initialState = {
  desserts: [],
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCHED_DESSERTS:
      return {
        ...initialState,
        desserts: [...action.desserts],
        error: false
      }
    default:
      return state;
  }
}