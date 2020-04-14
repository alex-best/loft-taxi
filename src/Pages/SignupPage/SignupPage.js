import React from "react";
import { Grid, Paper, Link } from "@material-ui/core";
import RegLayout from "../../Layout/RegLayout/RegLayout";
import SignupForm from "../../Components/SignupForm/SignupForm";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../AppData/regFormStyles";

import "./SignupPage.css";

const SignupPage = (props) => {

    const onSubmitHandler = () => {
        props.history.push('/map')
    }

    const { classes } = props;

    return (
        <RegLayout>
            <Grid container>
                <Paper className={classes.root}>
                    <Grid item xs={12}>
                        <h2>Зарегистрироваться</h2>
                        <span>
                            Уже зарегистрированы?&nbsp;
                            <Link
                                href="/login"
                            >
                                Войти
                            </Link>
                        </span>
                    </Grid>
                    <Grid item xs={12}>
                        <SignupForm onSubmit={onSubmitHandler} />
                    </Grid>
                </Paper>
            </Grid>
        </RegLayout>
    );
};

export default withStyles(styles)(SignupPage);
