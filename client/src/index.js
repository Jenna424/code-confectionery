import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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