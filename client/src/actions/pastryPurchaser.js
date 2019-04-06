import * as types from './actionTypes';
const BASE_URL = process.env.REACT_APP_API_URL;

export const purchasePastrySuccess = cakeOrder => ({
  type: types.PURCHASE_PASTRY_SUCCESS,
  cakeOrder
})
// purchasePastrySuccess action creator function
// accepts the cakeOrder object that was just created as an argument.
// I then pass this cakeOrder object to the action object 
// that is created and implicitly returned by invoking purchasePastrySuccess action creator function.
// When the action object is dispatched, I ultimately hit the 'PURCHASE_PASTRY_SUCCESS' action type 
// in the switch statement of pastryPurchaser reducer function.
// I add the cake order to my array of cake order objects stored in the Redux store state