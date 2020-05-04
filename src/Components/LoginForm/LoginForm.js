import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import Input from '../Input/';
import useStyles from '../../Hooks/useRegFormStyles';

const LoginForm = (props) => {

    const classes = useStyles();

    const validate = values => {
        const errors ={};

        if (values.email) {
            const match = values.email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (!match) {
                errors.email = 'некорректный email'
            }
        }

        return errors;
    }
    
    const handleSubmit = (values) => {
        const { email, password } = values;

        if (email && password) {
            props.onSubmit(email, password);
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            validate={validate}
            render={({handleSubmit}) => (
                <form data-testid='login-form' onSubmit={handleSubmit} className={classes.form}>
                    <Field
                        name="email"
                        label="Почта"
                        required={true}
                        type="email"
                        dataTestId="email-input"
                        component={Input}
                    />
                    <Field
                        name="password"
                        label="Пароль"
                        required={true}
                        type="password"
                        dataTestId="password-input"
                        component={Input}
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
            )}
        />
    );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
