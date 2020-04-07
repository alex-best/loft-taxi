import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import styles from '../../AppData/regFormStyles';
import { withStyles } from '@material-ui/core/styles';

const LoginForm = props => {
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
            <Grid item xs={12}>
                <Paper className={classes.root}>
                    <h2>Войти</h2>
                    <span>Новый пользователь?&nbsp;<Link href="/signup" id="signup" onClick={onClickHandler}>Зарегистрируйтесь</Link></span>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <TextField fullWidth={true} margin={'normal'} label="Имя пользователя*" />
                        <TextField fullWidth={true} margin={'normal'} label="Пароль*" />
                        <Button type="submit" className={classes.button} variant="contained" color="primary" >Войти</Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(LoginForm);
