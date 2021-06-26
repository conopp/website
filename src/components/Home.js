import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Navbar from './helpers/Navbar.js';
import Navlist from './helpers/Navlist.js';

import '../styles/Home.scss';

function Home() {
    return (
        <div id="home">
            <Navbar />
            <main id="content">
                <section>
                    test
                </section>
                <Navlist />
            </main>
        </div>
    )
}

export default Home;