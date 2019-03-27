import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

const wrappedApp = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(
  wrappedApp,
  document.getElementById('root')
);