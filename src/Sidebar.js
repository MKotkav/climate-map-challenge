import React from 'react';
import styled from "styled-components";

function Sidebar({selectedLocationId, observationLocations}) {
    const id = selectedLocationId;
    const loc = observationLocations.find(loc => loc.info.id === id);
    const locationName = loc && loc.info.name;
    const locationInfo = loc && JSON.stringify(loc.info);
    
    return <div>
        <h3>{locationName}</h3>
        <pre>{locationInfo}</pre>
        {/* <h1>{loc && JSON.stringify(loc.data.t.timeValuePairs[144].value, null, 4)}</h1> */}
    </div>
}

export default styled(Sidebar)`
    width: 300px;
    height: 100vh;
    margin-left: 5px;
`;