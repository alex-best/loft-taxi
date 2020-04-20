import {
    regRequest,
    regSuccess,
    regFailure,
} from "../Pages/SignupPage/actions";

const registerUrl = "https://loft-taxi.glitch.me/register";

export const regMiddleware = (store) => (next) => (action) => {
    if (action.type === regRequest.toString()) {
        fetch(registerUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    store.dispatch({
                        type: regFailure.toString(),
                        payload: data.error,
                    });

                    return;
                }

                store.dispatch({
                    type: regSuccess.toString(),
                    payload: data,
                });

                const stateJSON = JSON.stringify(store.getState().authReducer);

                localStorage.setItem("auth", stateJSON);
            })
            .catch(() => {
                store.dispatch({
                    type: regFailure.toString(),
                    payload: "Нет связи с сервером",
                });
            });
    }

    next(action);
};
