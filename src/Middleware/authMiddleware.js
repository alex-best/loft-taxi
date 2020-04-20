import {
    authRequest,
    authSuccess,
    authFailure,
    authLogout,
} from "../Pages/LoginPage/actions";

const authUrl = "https://loft-taxi.glitch.me/auth";

export const authMiddleware = (store) => (next) => (action) => {
    if (action.type === authRequest.toString()) {
        fetch(authUrl, {
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
                        type: authFailure.toString(),
                        payload: data.error,
                    });

                    return;
                }

                store.dispatch({
                    type: authSuccess.toString(),
                    payload: data,
                });

                const stateJSON = JSON.stringify(store.getState().authReducer);

                localStorage.setItem("auth", stateJSON);
            })
            .catch(() => {
                store.dispatch({
                    type: authFailure.toString(),
                    payload: "Нет связи с сервером",
                });
            });
    }

    if (action.type === authLogout.toString()) {
        localStorage.removeItem("auth");
    }

    next(action);
};
