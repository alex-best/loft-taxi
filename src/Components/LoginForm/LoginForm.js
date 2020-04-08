import React, { useContext, useState } from "react";
import { Grid, Paper, TextField, Button, Link } from "@material-ui/core";
import styles from "../../AppData/regFormStyles";
import { withStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../Contexts/AuthContext";
import PropTypes from 'prop-types';

const LoginForm = (props) => {
    const auth = useContext(AuthContext);

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (username && password) {
            auth.login(username, password);
            props.onPageChange('map');
        }
    };

    const onUsernameInputChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordInputChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const onClickHandler = (e) => {
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
                    <form className={classes.form} onSubmit={submitHandler}>
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
                        >
                            Войти
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

LoginForm.propTypes = {
    onPageChange: PropTypes.func.isRequired
}

export default withStyles(styles)(LoginForm);
