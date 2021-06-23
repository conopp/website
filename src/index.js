import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './state/index.js'

import Home from './components/Home';

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);

/*
    Theme:
        Bluish: #20232A
        Dark Bluish: #0D1117
        Dark Gray: #181A1B
        Near Black: #0D0D0D
*/