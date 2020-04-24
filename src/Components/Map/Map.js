import React from "react";
import mapboxgl from "mapbox-gl";
import { ACCESS_TOKEN } from "../../AppData/mapAccessToken";
import { connect } from "react-redux";
import OrderCard from "../../Components/OrderCard/OrderCard";
import { clearRoute } from '../../Store/Route/actions';

const styles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

class Map extends React.Component {
    mapContainer = React.createRef();

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10",
            accessToken: ACCESS_TOKEN,
            center: [30.2656504, 59.8029126],
            zoom: 14,
        });
    }

    componentWillUnmount() {
        this.map.remove();
        this.props.clearRoute();
    }

    drawRoute = (route) => {
        this.map.flyTo({
            center: route[0],
            zoom: 15,
        });

        if (this.map.getLayer("route")) {
            this.map.removeLayer("route");
            this.map.removeSource("route");
        }

        this.map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: route,
                    },
                },
            },
            layout: {
                "line-join": "round",
                "line-cap": "round",
            },
            paint: {
                "line-color": "#ffc617",
                "line-width": 8,
            },
        });
    };

    render() {
        if (this.props.route) {
            this.drawRoute(this.props.route);
        }
        return (
            <>
                <div id="map" style={styles} ref={this.mapContainer}></div>
                <OrderCard />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        route: state.route.coords,
    };
};

const mapDispatchToProps = { clearRoute };

export default connect(mapStateToProps, mapDispatchToProps)(Map);
