import React from "react";
import { Grid, Paper, Link } from "@material-ui/core";
import RegLayout from "../../Layout/RegLayout/RegLayout";
import LoginForm from "../../Components/LoginForm/LoginForm";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../AppData/regFormStyles";

import "./LoginPage.css";

const LoginPage = (props) => {

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
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <h2>Войти</h2>
                        <span>
                            Новый пользователь?&nbsp;
                            <Link
                                href="/signup"
                                id="signup"
                                onClick={onClickHandler}
                            >
                                Зарегистрируйтесь
                            </Link>
                        </span>
                        <LoginForm onPageChange={props.onPageChange} />
                    </Paper>
                </Grid>
            </Grid>
        </RegLayout>
    );
};

LoginPage.propTypes = {
    onPageChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginPage);
