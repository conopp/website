import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Navbar from './helpers/Navbar.js';

function Home() {
    return (
        <div id="home" style={{width:"100%"}}>
            <Navbar />
            <section></section>
            <aside></aside>
        </div>
    )
}

export default Home;