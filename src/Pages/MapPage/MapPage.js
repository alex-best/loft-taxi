import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Map from '../../Components/Map/Map';
import { withAuth } from '../../HOC/withAuth';

const MapPage = props => {
    
    return (
        <MainLayout>
            <Map/>
        </MainLayout>
    );
};

export default withAuth(MapPage);
