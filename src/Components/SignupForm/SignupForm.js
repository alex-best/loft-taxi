import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import styles from "../../AppData/regFormStyles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import "./SignupForm.css";

const SignupForm = (props) => {

    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [password, setPassword] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (email && password && name && surname) {
            props.onSubmit(email, password, name, surname)
        }
    };

    const onEmailInputChangehandler = (e) => {
        setEmail(e.target.value);
    };

    const onFirstNameInputChangehandler = (e) => {
        setName(e.target.value);
    };

    const onLastNameInputChangehandler = (e) => {
        setSurname(e.target.value);
    };

    const onPasswordInputChangehandler = (e) => {
        setPassword(e.target.value);
    };

    const { classes } = props;

    return (
        <form className={classes.form} onSubmit={submitHandler} data-testid="signup-form">
            <TextField
                fullWidth={true}
                margin={"normal"}
                label="Адрес электронной почты"
                placeholder="Адрес электронной почты"
                type="email"
                onChange={onEmailInputChangehandler}
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        margin={"normal"}
                        label="Имя"
                        placeholder="Имя"
                        onChange={onFirstNameInputChangehandler}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin={"normal"}
                        label="Фамилия"
                        onChange={onLastNameInputChangehandler}
                        placeholder="Фамилия"
                    />
                </Grid>
            </Grid>
            <TextField
                fullWidth={true}
                margin={"normal"}
                label="Пароль"
                placeholder="Пароль"
                type="password"
                onChange={onPasswordInputChangehandler}
            />
            <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
                data-testid="submit-btn"
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(SignupForm);
