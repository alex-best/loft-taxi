import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";

import "./MapPage.css";

const MapPage = props => {
    return (
        <MainLayout onPageChange={props.onPageChange}>
            <div className="Map">
                <h1>Map</h1>
            </div>
        </MainLayout>
    );
};

export default MapPage;
