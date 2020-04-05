import React from "react";

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

    return (
        <div className="Signup_form signup-form">
            <div className="signup-form_header">
                <h2>Регистрация</h2>
                <span>
                    Уже зарегистрированы?&nbsp;
                    <a href="/login" id="login" onClick={onClickHandler}>
                        Войти
                    </a>
                </span>
            </div>
            <div className="signup-form_form">
                <form onSubmit={submitHandler}>
                    <input
                        type="email"
                        id="signup-input-email"
                        placeholder="Адрес электронной почты"
                    />
                    <input
                        type="text"
                        id="signup-input-firstname"
                        placeholder="Имя"
                    />
                    <input
                        type="text"
                        id="signup-input-lastname"
                        placeholder="Фамилия"
                    />
                    <input
                        type="password"
                        id="signup-input-password"
                        placeholder="Пароль"
                    />
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
