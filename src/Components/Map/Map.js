import React from "react";
import mapboxgl from "mapbox-gl";
import { ACCESS_TOKEN } from "../../AppData/mapAccessToken";

const styles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
};

class Map extends React.Component {
    mapContainer = React.createRef();

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10",
            accessToken: ACCESS_TOKEN,
            center: [53.20274949999994, 56.85237874030841],
            zoom: 14
        });
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return <div id="map" style={styles} ref={this.mapContainer}></div>;
    }
}

export default Map;
