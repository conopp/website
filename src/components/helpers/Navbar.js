import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/Navbar.scss'

function Navbar() {
    return (
        <nav id="navbar">
            <a id="discord-icon" href="https://discord.gg/aj8qW2TsJN" target="_blank">
                <img src="discord.png"></img>
            </a>

            <NavLink to="/" exact>
                Home
            </NavLink>

            <NavLink to="/gear">
                Gear
            </NavLink>

            <NavLink to="/mobs">
                Mobs
            </NavLink>

            <a id="profile-icon" href="#">
                <img src="profile.png"></img>
            </a>
        </nav>
    )
}

export default Navbar;