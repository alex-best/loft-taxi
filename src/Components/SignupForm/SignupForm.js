import React, { useState, useContext } from "react";
import { Grid, Paper, TextField, Button, Link } from "@material-ui/core";
import styles from "../../AppData/regFormStyles";
import { withStyles } from "@material-ui/core/styles";
import { AuthContext } from '../../Contexts/AuthContext';
import PropTypes from 'prop-types';

import "./SignupForm.css";

const SignupForm = (props) => {

    const auth = useContext(AuthContext);

    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [password, setPassword] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        auth.login(email, firstName, lastName, password);
        props.onPageChange('map');
    };

    const onClickHandler = (e) => {
        e.preventDefault();
        const pageId = e.target.id;

        if (pageId) {
            props.onPageChange(pageId);
        }
    };

    const onEmailInputChangehandler = e => {
        setEmail(e.target.value);
    }

    const onFirstNameInputChangehandler = e => {
        setFirstName(e.target.value);
    }

    const onLastNameInputChangehandler = e => {
        setLastName(e.target.value);
    }

    const onPasswordInputChangehandler = e => {
        setPassword(e.target.value);
    }

    const { classes } = props;

    return (
        <Grid container>
            <Paper className={classes.root}>
                <Grid item xs={12}>
                    <h2>Зарегистрироваться</h2>
                    <span>
                        Уже зарегистрированы?&nbsp;
                        <Link href="/login" id="login" onClick={onClickHandler}>
                            Войти
                        </Link>
                    </span>
                </Grid>
                <Grid item xs={12}>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <TextField
                            fullWidth={true}
                            margin={"normal"}
                            label="Адрес электронной почты"
                            onChange={onEmailInputChangehandler}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField margin={"normal"} label="Имя" onChange={onFirstNameInputChangehandler}/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField margin={"normal"} label="Фамилия" onChange={onLastNameInputChangehandler}/>
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth={true}
                            margin={"normal"}
                            label="Пароль"
                            onChange={onPasswordInputChangehandler}
                        />
                        <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            color="primary"
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    );
};

SignupForm.propTypes = {
    onPageChange: PropTypes.func.isRequired
}

export default withStyles(styles)(SignupForm);
