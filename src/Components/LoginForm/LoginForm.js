import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import styles from "../../AppData/regFormStyles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const LoginForm = (props) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (email && password) {
            props.onSubmit(email, password);
        }
    };

    const onEmailInputChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordInputChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const { classes } = props;

    return (
        <form
            data-testid="login-form"
            className={classes.form}
            onSubmit={submitHandler}
        >
            <TextField
                id="login-username"
                onChange={onEmailInputChangeHandler}
                fullWidth={true}
                margin={"normal"}
                label="Имя пользователя*"
            />
            <TextField
                id="login-password"
                onChange={onPasswordInputChangeHandler}
                fullWidth={true}
                margin={"normal"}
                label="Пароль*"
                type="password"
            />
            <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
                data-testid="submit-btn"
            >
                Войти
            </Button>
        </form>
    );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(LoginForm);
