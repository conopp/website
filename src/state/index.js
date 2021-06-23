import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(reducer, applyMiddleware(thunk, logger));