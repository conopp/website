import React from 'react';

import '../../styles/Navlist.scss';

function Navlist() {
    return (
        <nav id="navlist">
            <h1><a href="/website#item1">Item1</a></h1>
                <h2><a href="/website#item2">Item2</a></h2>
            <h1><a href="/website#item3">Item3</a></h1>
                <h2><a href="/website#item4">Item4</a></h2>
                <h2><a href="/website#item5">Item5</a></h2>
            <h1><a href="/website#item6">Item6</a></h1>
                <h2><a href="/website#item7">Item7</a></h2>
                    <h3><a href="/website#item8">Item8</a></h3>
                <h2><a href="/website#item9">Item9</a></h2>
                <h2><a href="/website#item10">Item10</a></h2>
            <h1><a href="/website#item11">Item11</a></h1>
            <h1><a href="/website#item12">Item12</a></h1>
        </nav>
    )
}

export default Navlist;