import React from "react";
import { Grid, Paper, Link } from "@material-ui/core";
import RegLayout from "../../Layout/RegLayout/RegLayout";
import SignupForm from "../../Components/SignupForm/SignupForm";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../AppData/regFormStyles";

import "./SignupPage.css";

const SignupPage = (props) => {

    const onClickHandler = (e) => {
        e.preventDefault();
        const pageId = e.target.id;

        if (pageId) {
            props.onPageChange(pageId);
        }
    };

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
                                id="login"
                                onClick={onClickHandler}
                            >
                                Войти
                            </Link>
                        </span>
                    </Grid>
                    <Grid item xs={12}>
                        <SignupForm onPageChange={props.onPageChange} />
                    </Grid>
                </Paper>
            </Grid>
        </RegLayout>
    );
};

SignupPage.propTypes = {
    onPageChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignupPage);
