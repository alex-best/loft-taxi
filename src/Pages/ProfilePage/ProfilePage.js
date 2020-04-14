import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import PropTypes from 'prop-types';

import "./ProfilePage.css";

const ProfilePage = props => {
    return (
        <MainLayout onPageChange={props.onPageChange}>
            <div className="Profile">
                <h1>Profile</h1>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;
