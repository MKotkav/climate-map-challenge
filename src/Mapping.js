import React from 'react';
import styled from "styled-components";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class Mapping extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            position: [64.5, 25],
            zoom: 6
        }

        this.getMarkerStyle = this.getMarkerStyle.bind(this);
        this.updateMap = this.updateMap.bind(this);
    }

    getMarkerStyle() {
        return { backgroundColor: "red" };
    }

    updateMap(map) {
        this.setState({
            position: map.leafletElement.getCenter(),
            zoom: map.leafletElement.getZoom()
        });
    }

    render() {

        const MapContainer = styled(Map)`
        width: calc(100vw - 300px);
        height: 100vh;
        position:absolute;
        top:0px;
        left:300px;
        `;

        return (
            <MapContainer center={this.state.position} zoom={this.state.zoom} ref="map">
                <TileLayer
                    url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    subdomains='abcd'
                    maxZoom={19}
                />
                {this.props.observationLocations.map(loc =>
                    <Marker
                        position={[loc.position.lat, loc.position.lon]}
                        key={loc.info.id}
                        onClick={() => {
                            this.updateMap(this.refs.map);
                            this.props.setSelectedLocation(loc.info.id);
                        }}
                    >
                    </Marker>)}
            </MapContainer>
        );
    }
}

export default Mapping;