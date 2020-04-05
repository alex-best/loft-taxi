import React from "react";

import "./LoginForm.css";

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

    return (
        <div className="Login_form login-form">
            <div className="login-form_header">
                <h2>Войти</h2>
                <span>
                    Новый пользователь?&nbsp;
                    <a
						href="/signup"
						id="signup"
                        onClick={onClickHandler}
                    >
                        Зарегистрируйтесь
                    </a>
                </span>
            </div>
            <div className="login-form_form">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        id="login-input-username"
                        placeholder="Имя пользователя*"
                    />
                    <input
                        type="password"
                        id="login-input-password"
                        placeholder="Пароль*"
                    />
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
