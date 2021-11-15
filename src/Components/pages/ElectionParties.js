import React from 'react'

import Navi from './parts/NaviConnect';
import Previous from './parts/Previous';
import Parties from './parts/Parties';

function ElectionParties() {
    return (
        <div className="whole_page_container">
            <Navi/>
            <Previous/>
            <Parties/>
        </div>
    )
}

export default ElectionParties;
