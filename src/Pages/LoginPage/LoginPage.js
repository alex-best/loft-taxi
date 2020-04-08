import React from "react";
import RegLayout from '../../Layout/RegLayout/RegLayout';
import LoginForm from "../../Components/LoginForm/LoginForm";
import PropTypes from 'prop-types';

import "./LoginPage.css";

const LoginPage = props => {
    return (
      <RegLayout>
        <LoginForm onPageChange={props.onPageChange} />
      </RegLayout>
    );
};

LoginPage.propTypes = {
  onPageChange: PropTypes.func.isRequired
}

export default LoginPage;
