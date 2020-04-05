import React from "react";
import RegLayout from '../../Layout/RegLayout/RegLayout';
import LoginForm from "../../Components/LoginForm/LoginForm";

import "./LoginPage.css";

const LoginPage = props => {
    return (
      <RegLayout>
        <LoginForm onPageChange={props.onPageChange} onSubmit={props.onSubmit} />
      </RegLayout>
    );
};

export default LoginPage;
