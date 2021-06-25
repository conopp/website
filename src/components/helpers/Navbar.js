import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/Navbar.scss';

function Navbar() {
    return (
        <nav id="navbar">
            <div id="discord-img">
                <a href="https://discord.gg/aj8qW2TsJN" target="_blank">
                    <img src="https://drive.google.com/uc?export=download&id=1qdHDoBzD-o-w0Am9kCq8ON1RHQwtsNqK"></img>
                </a>
            </div>
            <nav id="pages">
                <NavLink exact to="/website" className="page">
                    Home
                </NavLink>
                <NavLink to="/website/gear" className="page">
                    Gear
                </NavLink>
                <NavLink to="/website/mobs" className="page">
                    Mobs
                </NavLink>
            </nav>
            <div id="paypal-img">
                <a href="https://www.paypal.com/donate?business=5TYW7F8F98GDQ&no_recurring=0&currency_code=USD" target="_blank">
                    <img src="https://drive.google.com/uc?export=download&id=1fpsOCQAA52SkQllBz7tQ0CzDTOFDf5Ns"></img>
                </a>
            </div>
            {/*<nav id="secondary">
                <div id="discord-img">
                    <a href="https://discord.gg/aj8qW2TsJN" target="_blank">
                        <img src="https://drive.google.com/uc?export=download&id=1qdHDoBzD-o-w0Am9kCq8ON1RHQwtsNqK"></img>
                    </a>
                </div>
                <div id="paypal-img">
                    <a href="https://www.paypal.com/donate?business=5TYW7F8F98GDQ&no_recurring=0&currency_code=USD" target="_blank">
                        <img src="https://drive.google.com/uc?export=download&id=1fpsOCQAA52SkQllBz7tQ0CzDTOFDf5Ns"></img>
                    </a>
                </div>
            </nav>*/}
        </nav>
    )
}

export default Navbar;