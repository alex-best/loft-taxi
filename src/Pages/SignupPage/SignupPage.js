import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom';
import RegLayout from "../../Layout/RegLayout/";
import SignupForm from "../../Components/SignupForm/";
import { connect } from "react-redux";
import { regRequest } from "../../Store/Signup/actions";
import useStyles from '../../Hooks/useRegFormStyles';

const SignupPage = (props) => {
    const { error, regRequest } = props;

    const classes = useStyles();

    const onSubmitHandler = (email, password, name, surname) => {
        regRequest({ email, password, name, surname });
    };

    return (
        <RegLayout>
            <Grid container>
                <Paper className={classes.root}>
                    <Grid item xs={12}>
                        <h2>Зарегистрироваться</h2>
                        <span>
                            Уже зарегистрированы?&nbsp;
                            <Link className={classes.link} to="/login">Войти</Link>
                        </span>
                    </Grid>
                    <Grid item xs={12}>
                        { error && <p style={{color: 'red'}}>{error}</p>}
                        <SignupForm onSubmit={onSubmitHandler} />
                    </Grid>
                </Paper>
            </Grid>
        </RegLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.reg.isLoggedIn,
        error: state.reg.error
    };
};

const mapDispatchToProps = { regRequest };

export default SignupPage;

export const connectedSignupPage = connect(mapStateToProps, mapDispatchToProps)(SignupPage);
