import React from 'react';

import '../../styles/Navbar.scss'

function Navbar() {
    return (
        <nav id="navbar">
            <a id="discord-icon" href="https://discord.gg/aj8qW2TsJN" target="_blank">
                <img src="discord.png"></img>
            </a>
            <a href="/">Tab:Home</a>
            <a href="/drops">Tab:Drops</a>
            <a href="/creatures">Tab:Creatures</a>
            <a href="/quests">Tab:Quests</a>
            <img id="profile-icon" src="profile.png"></img>
        </nav>
    )
}

export default Navbar;