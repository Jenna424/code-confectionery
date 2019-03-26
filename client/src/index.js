import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const wrappedApp = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  wrappedApp,
  document.getElementById('root')
);