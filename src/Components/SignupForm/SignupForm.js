import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import Input from "../Input/";
import PropTypes from "prop-types";
import useStyles from '../../Hooks/useRegFormStyles';

const SignupForm = (props) => {
    const classes = useStyles();

    const validate = (values) => {
        const errors = {};
        const { email, name, surname, password } = values;

        if (email) {
            const match = email.match(
                /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i
            );
            if (!match) {
                errors.email = "некорректный email";
            }
        }

        if (name && name.match(/\d/g)) {
            errors.name = "недопустимые символы";
        }

        if (surname && surname.match(/\d/g)) {
            errors.surname = "недопустимые символы";
        }

        if (password && password.length < 6) {
            errors.password = "пароль должен содержать минимум 6 символов";
        }

        return errors;
    };

    const submitHandler = ({ email, password, name, surname }) => {
        if (email && password && name && surname) {
            props.onSubmit(email, password, name, surname);
        }
    };

    return (
        <Form
            onSubmit={submitHandler}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={classes.form} data-testid="signup-form">
                    <Field
                        name="email"
                        label="Адрес электронной почты"
                        placeholder="Адрес электронной почты"
                        type="email"
                        dataTestId="email"
                        component={Input}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Field
                                name="name"
                                label="Имя"
                                placeholder="Имя"
                                dataTestId="firstName"
                                component={Input}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="surname"
                                label="Фамилия"
                                placeholder="Фамилия"
                                dataTestId="lastName"
                                component={Input}
                            />
                        </Grid>
                    </Grid>
                    <Field
                        name="password"
                        label="Пароль"
                        placeholder="Пароль"
                        type="password"
                        dataTestId="password"
                        component={Input}
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
            )}
        />
    );
};

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
