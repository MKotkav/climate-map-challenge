import React from 'react';
import styled from "styled-components";
import Chart from './Chart';

function Sidebar({ selectedLocationId, observationLocations }) {
    const id = selectedLocationId;
    const loc = observationLocations.find(loc => loc.info.id === id);
    let locationName = "";
    let locationTemp;
    if (loc !== undefined) {
        locationName = loc.info.name
        locationTemp = "Current temperature: " +loc.data.t.timeValuePairs[loc.data.t.timeValuePairs.length - 1].value + " °C";
    }
    
    const contents = loc === undefined ? 
        <h1> Choose location</h1> 
        :
        <div>
            <h2 > Location: </h2>
            <h3 > {locationName} </h3>
            <pre > {locationTemp} </pre>
            <Chart
                locationInfo={loc}
            />
        </div>

    return (
        <div className="Sidebar">
            {contents}
        </div>
    );
}

export default styled(Sidebar)`
    width: 300px;
    height: 100vh;
    margin-left: 5px;
`;