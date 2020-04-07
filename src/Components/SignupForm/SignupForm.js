import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import styles from '../../AppData/regFormStyles';
import { withStyles } from '@material-ui/core/styles';

import "./SignupForm.css";

const SignupForm = props => {
    const submitHandler = e => {
        e.preventDefault();
        props.onSubmit();
    };

    const onClickHandler = e => {
        e.preventDefault();
		const pageId = e.target.id;
		
		if (pageId) {
			props.onPageChange(pageId);
		}
    };

    const { classes } = props;

    return (
        <Grid container>
            <Paper className={classes.root}>
                <Grid item xs={12}>
                    <h2>Зарегистрироваться</h2>
                    <span>Уже зарегистрированы?&nbsp;<Link href="/login" id="login" onClick={onClickHandler}>Войти</Link></span>
                </Grid>
                <Grid item xs={12}>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <TextField fullWidth={true} margin={'normal'} label="Адрес электронной почты" />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField margin={'normal'} label="Имя"/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField margin={'normal'} label="Фамилия" />
                            </Grid>
                        </Grid>
                        <TextField fullWidth={true} margin={'normal'} label="Пароль" />
                        <Button type="submit" className={classes.button} variant="contained" color="primary" >Зарегистрироваться</Button>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default withStyles(styles)(SignupForm);
