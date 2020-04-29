import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
// import OrderCard from '../../Components/OrderCard/OrderCard';
import Map from '../../Components/Map/Map';

const MapPage = (props) => {

    return (
        <MainLayout>
            <Map/>
            {/* <OrderCard /> */}
        </MainLayout>
    );
};

export default MapPage;
