import {
    authRequest,
    authSuccess,
    authFailure,
    authLogout,
} from "./authActions";

const serverUrl = "https://loft-taxi.glitch.me";

export const authMiddleware = (store) => (next) => (action) => {
    if (action.type === authRequest.toString()) {
        fetch(serverUrl + action.meta, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload)
        })
            .then(async (response) => {
                const result = await response.json();

                if (result.error) {
                    store.dispatch({
                        type: authFailure.toString(),
                        payload: result.error,
                    });

                    return;
                }

                store.dispatch({
                    type: authSuccess.toString(),
                    payload: result,
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
