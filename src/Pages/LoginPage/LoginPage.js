import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom';
import RegLayout from "../../Layout/RegLayout/";
import LoginForm from "../../Components/LoginForm/";
import { connect } from "react-redux";
import { authRequest } from "../../Store/Login/actions";
import useStyles from '../../Hooks/useRegFormStyles';

const LoginPage = (props) => {
    const { error, authRequest } = props;

    const classes = useStyles();

    const onSubmitHandler = (email, password) => {
        authRequest({email, password});
    };

    return (
        <RegLayout>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <h2>Войти</h2>
                        <span>
                            Новый пользователь?&nbsp;
                            <Link className={classes.link} to="/signup">Зарегистрируйтесь</Link>
                        </span>
                        { error && <p style={{color: 'red'}}>{error}</p>}
                        <LoginForm onSubmit={onSubmitHandler} />
                    </Paper>
                </Grid>
            </Grid>
        </RegLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        error: state.auth.error
    };
};

const mapDispatchToProps = { authRequest };

export default LoginPage;

export const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
