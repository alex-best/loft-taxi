import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import "./MapPage.css";

const MapPage = props => {
    return (
        <MainLayout onPageChange={props.onPageChange}>
            <div className="Map">
                <h1>MAP</h1>
            </div>
        </MainLayout>
    );
};

export default MapPage;
