import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom';
import RegLayout from "../../Layout/RegLayout/RegLayout";
import SignupForm from "../../Components/SignupForm/SignupForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authRequest } from "../../Store/auth/authActions";
import styles from "../../AppData/regFormStyles";

import "./SignupPage.css";

const SignupPage = (props) => {
    const { isLoggedIn, error } = props;

    const onSubmitHandler = (email, password, name, surname) => {
        const { authRequest } = props;
        authRequest({ email, password, name, surname }, "/register");
    };

    return isLoggedIn ? (
        <Redirect to="/map" />
    ) : (
        <RegLayout>
            <Grid container>
                <Paper style={styles.root}>
                    <Grid item xs={12}>
                        <h2>Зарегистрироваться</h2>
                        <span>
                            Уже зарегистрированы?&nbsp;
                            <Link style={styles.link} to="/login">Войти</Link>
                        </span>
                    </Grid>
                    <Grid item xs={12}>
                        { error ? <p style={{color: 'red'}}>{error}</p> : null}
                        <SignupForm onSubmit={onSubmitHandler} />
                    </Grid>
                </Paper>
            </Grid>
        </RegLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authReducer.auth.isLoggedIn,
        error: state.authReducer.auth.error,
    };
};

const mapDispatchToProps = { authRequest };

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
