import React from "react";
import RegLayout from '../../Layout/RegLayout/RegLayout';
import SignupForm from "../../Components/SignupForm/SignupForm";
import PropTypes from 'prop-types';

import "./SignupPage.css";

const SignupPage = props => {
    return (
        <RegLayout>
            <SignupForm onPageChange={props.onPageChange} />
        </RegLayout>
    );
};

SignupPage.propTypes = {
    onPageChange: PropTypes.func.isRequired
}

export default SignupPage;
