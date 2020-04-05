import React from "react";
import RegLayout from '../../Layout/RegLayout/RegLayout';
import SignupForm from "../../Components/SignupForm/SignupForm";

import "./SignupPage.css";

const SignupPage = props => {
    return (
        <RegLayout>
            <SignupForm onPageChange={props.onPageChange} onSubmit={props.onSubmit}/>
        </RegLayout>
    );
};

export default SignupPage;
