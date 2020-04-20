import { setCardRequest, setCardSuccessRequest, failureRequest, getCardRequest, getCardSuccessRequest } from "../Pages/ProfilePage/actions";

export const profileMiddleware = (store) => (next) => (action) => {
    if (action.type === setCardRequest.toString()) {
        fetch("https://loft-taxi.glitch.me/card", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
        })
            .then((response) => response.json())
            .then(data => {
                if (data.error) {
                    dispatchErrorAction(data.error);

                    return;
                }

                store.dispatch({
                    type: setCardSuccessRequest.toString(),
                    payload: {
                        card: {
                            ...action.payload,
                            success: true
                        }
                    },
                });
            })
            .catch(() => {
                store.dispatch({
                    type: failureRequest.toString(),
                    payload: "Нет связи с сервером",
                });
            });
    }

    if (action.type === getCardRequest.toString()) {
        fetch(`https://loft-taxi.glitch.me/card?token=${action.payload}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    dispatchErrorAction(data.error);

                    return;
                }

                store.dispatch({
                    type: getCardSuccessRequest.toString(),
                    payload: {
                        ...data
                    }
                })
            })
            .catch(() => {
                store.dispatch({
                    type: failureRequest.toString(),
                    payload: "Нет связи с сервером"
                });
            })
    }

    function dispatchErrorAction(error) {
        store.dispatch({
            type: failureRequest.toString(),
            payload: {
                error
            },
        });
    }

    next(action);
};