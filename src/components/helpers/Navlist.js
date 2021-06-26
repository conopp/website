import React, { useState } from 'react';

import '../../styles/Navlist.scss';

function Navlist() {
    const [isActive, setActive] = useState([false,null]);

    // react-router doesn't push hash links to history and we don't want it to,
    //     because it'll adversely affect forward/backward buttons; therefore,
    //     we can't check history to determine which link is active, so we have
    //     to set manually to replicate NavLink functionality
    const toggleActive = () => {
        // remove "className='active'" and "aria-current='step'" from all nav first
        // place these attributes only on the selected item
        setActive([!isActive[0], (!isActive[1] ? "aria-current='step'" : null)]);
        console.log(isActive);
    }

    return (
        <nav id="navlist" aria-label="secondary">
            <ul>
                <a {...(isActive[1] ? {"aria-current":"step"} : {})}
                    className={isActive[0] ? "active" : null}
                    onClick={toggleActive}
                    href="/website#item1">
                    <h3>Item1</h3>
                </a>
            </ul>
            <ul>
                <a href="/website#item2" onClick={toggleActive}>
                    <h3>Item2</h3>
                </a>
            </ul>
            <ul>
                <li>Item3</li>
                <li>Item4</li>
            </ul>
        </nav>
    )
}

export default Navlist;