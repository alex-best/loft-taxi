import { setCardRequest, setCardSuccessRequest, failureRequest, getCardRequest, getCardSuccessRequest } from "./actions";

export const profileMiddleware = (store) => (next) => (action) => {
    if (action.type === setCardRequest.toString()) {
        fetch("https://loft-taxi.glitch.me/card", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
        })
            .then(async (response) => {
                const result = await response.json();

                if (result.error) {
                    dispatchErrorAction(result.error);

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
            .then(async response => {
                const result = await response.json();
                
                if (result.error) {
                    dispatchErrorAction(result.error);

                    return;
                }

                store.dispatch({
                    type: getCardSuccessRequest.toString(),
                    payload: {
                        ...result
                    }
                })

            })
            .catch(() => {
                store.dispatch({
                    type: failureRequest.toString(),
                    payload: "Нет связи с сервером",
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