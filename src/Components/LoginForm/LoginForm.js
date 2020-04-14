import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import styles from "../../AppData/regFormStyles";
import { withStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../Contexts/AuthContext";
import PropTypes from "prop-types";

const LoginForm = (props) => {
    const auth = useContext(AuthContext);

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (username && password) {
            auth.login(username, password);
            props.onSubmit();
        }
    };

    const onUsernameInputChangeHandler = (e) => {
        setUsername(e.target.value);
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
                onChange={onUsernameInputChangeHandler}
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

export default withStyles(styles)(LoginForm);
