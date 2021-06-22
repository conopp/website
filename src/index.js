import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';

ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk, logger))}>
    <App />
  </Provider>,
  document.getElementById('root')
);