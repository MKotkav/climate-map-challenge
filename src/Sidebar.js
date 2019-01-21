import React from 'react';
import styled from "styled-components";
import getSelectedLocatoinId from './locationGetter';

function Sidebar({selectedLocationId, observationLocations}) {
    const id = getSelectedLocatoinId(selectedLocationId);

    const loc = observationLocations.find(loc => loc.info.id === id);
    const locationName = loc && loc.info.name;
    // console.log(loc);
    return <div>
        <h3>{locationName}</h3>
        
        <pre>{loc && JSON.stringify(loc.info, null, 4)}</pre>
        {/* <h1>{loc && JSON.stringify(loc.data.t.timeValuePairs[144].value, null, 4)}</h1> */}
    </div>
}

export default styled(Sidebar)`
    width: 300px;
    height: 100vh;
`;