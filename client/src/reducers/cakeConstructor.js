import * as types from '../actions/actionTypes';

const initialState = {
  layers: null,
  cakeCost: 0,
  error: false
}

const CAKE_COMPONENT_COSTS = {
  batter: 5.5,
  filling: 4.5,
  frosting: 3.5,
  garnish: 2.5,
  topper: 1.5
}