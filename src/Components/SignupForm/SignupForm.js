import React, { useState, useContext } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import styles from "../../AppData/regFormStyles";
import { withStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../Contexts/AuthContext";
import PropTypes from "prop-types";

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
        props.onSubmit()
    };

    const onEmailInputChangehandler = (e) => {
        setEmail(e.target.value);
    };

    const onFirstNameInputChangehandler = (e) => {
        setFirstName(e.target.value);
    };

    const onLastNameInputChangehandler = (e) => {
        setLastName(e.target.value);
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

export default withStyles(styles)(SignupForm);
