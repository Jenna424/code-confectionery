import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

import layerLeveler from './reducers/layerLeveler';
import pastryPurchaser from './reducers/pastryPurchaser';
import flavorForm from './reducers/flavorForm';

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  layerLeveler,
  pastryPurchaser,
  flavorForm
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);