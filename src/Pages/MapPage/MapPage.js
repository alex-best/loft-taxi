import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Map from '../../Components/Map/Map';
import PropTypes from 'prop-types';

import "./MapPage.css";

const MapPage = props => {
    return (
        <MainLayout onPageChange={props.onPageChange}>
            <Map/>
        </MainLayout>
    );
};

MapPage.propTypes = {
    onPageChange: PropTypes.func.isRequired
}

export default MapPage;
