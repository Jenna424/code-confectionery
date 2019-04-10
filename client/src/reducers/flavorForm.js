import * as types from '../actions/actionTypes';

const initialState = {
  flavor: '',
  pastryPart: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FLAVOR_FORM_DATA:
      return action.flavorFormData;
    case types.RESET_FLAVOR_FORM:
      return initialState;
    default:
      return state;
  }
}