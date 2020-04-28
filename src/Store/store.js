import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "../Sagas/rootSaga";
import { getCardRequest } from "./Profile/actions";
import { getAddressListRequest } from "./AddressList/actions";

export default () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        const token = userData.token;

        if (token) {
            console.log("test");
            store.dispatch({
                type: getCardRequest.toString(),
                payload: {
                    token,
                },
            });
        }
    }

    store.dispatch({
        type: getAddressListRequest.toString(),
    })

    return store;
};
