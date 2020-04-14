import React from "react";
import { Grid, Paper, Link } from "@material-ui/core";
import RegLayout from "../../Layout/RegLayout/RegLayout";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../AppData/regFormStyles";

import "./LoginPage.css";

const LoginPage = (props) => {

    const onSubmitHandler = () => {
        props.history.push('/map')
    }
	
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
                            >
                                Зарегистрируйтесь
                            </Link>
                        </span>
                        <LoginForm onSubmit={onSubmitHandler} />
                    </Paper>
                </Grid>
            </Grid>
        </RegLayout>
    );
};

export default withStyles(styles)(LoginPage);
