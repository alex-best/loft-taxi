import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom';
import RegLayout from "../../Layout/RegLayout/RegLayout";
import LoginForm from "../../Components/LoginForm/LoginForm";
import styles from "../../AppData/regFormStyles";
import { connect } from "react-redux";
import { authRequest } from "../../Store/auth/authActions";
import { Redirect } from "react-router-dom";

import "./LoginPage.css";

const LoginPage = (props) => {
    const { isLoggedIn, error, authRequest } = props;

    const onSubmitHandler = (email, password) => {
        authRequest({email, password}, '/auth');
    };

    return isLoggedIn ? (
        <Redirect to="/map" />
    ) : (
        <RegLayout>
            <Grid container>
                <Grid item xs={12}>
                    <Paper style={styles.root}>
                        <h2>Войти</h2>
                        <span>
                            Новый пользователь?&nbsp;
                            <Link style={styles.link} to="/signup">Зарегистрируйтесь</Link>
                        </span>
                        { error ? <p style={{color: 'red'}}>{error}</p> : null}
                        <LoginForm onSubmit={onSubmitHandler} />
                    </Paper>
                </Grid>
            </Grid>
        </RegLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authReducer.auth.isLoggedIn,
        error: state.authReducer.auth.error
    };
};

const mapDispatchToProps = { authRequest };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
