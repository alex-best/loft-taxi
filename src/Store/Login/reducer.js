import { authLogout, authSuccess, authFailure } from "./actions";
import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

const getInitialState = () => {
    let isLoggedIn = false;
    let token = null;

    const stateFromLocalStorage = JSON.parse(localStorage.getItem('userData'));

    if (stateFromLocalStorage) {
        isLoggedIn = stateFromLocalStorage.isLoggedIn;
        token = stateFromLocalStorage.token;
    }

    return {
        isLoggedIn,
        token
    }
}

const isLoggedIn = handleActions(
    {
        [authSuccess]: () => true,
        [authFailure]: () => false,
        [authLogout]: () => false,
    },
    getInitialState().isLoggedIn
);

const success = handleActions(
    {
        [authSuccess]: () => true,
        [authFailure]: () => false,
        [authLogout]: () => false,
    },
    false
);

const error = handleActions(
    {
        [authSuccess]: () => false,
        [authFailure]: (state, action) => action.payload.error,
        [authLogout]: () => null,
    },
    null
);

const token = handleActions(
    {
        [authSuccess]: (state, action) => action.payload.token,
        [authFailure]: () => null,
        [authLogout]: () => null,
    },
    getInitialState().token
);

export default combineReducers({
    isLoggedIn,
    success,
    error,
    token,
});
