import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './state/index.js';

import Home from './components/Home';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/gear">

                </Route>
                <Route path="/mobs">

                </Route>
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

/*
    Theme:
        Bluish: #20232A
        Dark Bluish: #0D1117
        Dark Gray: #181A1B
        Near Black: #0D0D0D
*/