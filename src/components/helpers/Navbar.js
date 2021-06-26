import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/Navbar.scss';

function Navbar() {
    return (
        <nav id="navbar" aria-label="primary">
            <div id="discord-img">
                <a href="https://discord.gg/aj8qW2TsJN" target="_blank">
                    <img src="https://drive.google.com/uc?export=download&id=1qdHDoBzD-o-w0Am9kCq8ON1RHQwtsNqK"></img>
                </a>
            </div>
            <nav id="pages">
                <NavLink exact to="/website">
                    <h1>Home</h1>
                </NavLink>
                <NavLink to="/website/gear">
                    <h1>Gear</h1>
                </NavLink>
                <NavLink to="/website/mobs">
                    <h1>Mobs</h1>
                </NavLink>
            </nav>
            <div id="paypal-img">
                <a href="https://www.paypal.com/donate?business=5TYW7F8F98GDQ&no_recurring=0&currency_code=USD" target="_blank">
                    <img src="https://drive.google.com/uc?export=download&id=1fpsOCQAA52SkQllBz7tQ0CzDTOFDf5Ns"></img>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;