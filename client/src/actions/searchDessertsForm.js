import * as types from './actionTypes';

export const setSearchedDesserts = desserts => ({
  type: types.SET_SEARCHED_DESSERTS,
  desserts
})

export const searchDesserts = keywords => {
  return dispatch => {
    return fetch(`https://api.unsplash.com/search/photos?client_id=bb54ba9dca9f4f85fc84acc11c78ba903d1bfab32c29462b9b90ed82bf78533b&query=${keywords}`)
      .then(response => response.json())
      .then(jsonResponse => dispatch(setSearchedDesserts(jsonResponse.results)))
      .catch(error => dispatch(searchDessertsFailure(error)))
  }
}