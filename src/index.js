import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './state/index.js';

import Home from './components/Home.js';
import Gear from './components/Gear.js';
import Mobs from './components/Mobs.js';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path="/website">
                    <Home />
                </Route>
                <Route path="/gear">
                    <Gear />
                </Route>
                <Route path="/mobs">
                    <Mobs />
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