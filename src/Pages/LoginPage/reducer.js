import { authLogout, authSuccess, authFailure } from "./actions";
import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

const getInitialState = () => {
    const initialState = {
        isLoggedIn: false,
        success: false,
        error: null,
        token: null
    };

    const stateFromLocalStorage = JSON.parse(localStorage.getItem('auth'));

    return {
        isLoggedIn: stateFromLocalStorage.isLoggedIn || initialState.isLoggedIn,
        token: stateFromLocalStorage.token || initialState.token
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
        [authLogout]: () => null,
    },
    false
);

const error = handleActions(
    {
        [authSuccess]: () => false,
        [authFailure]: (state, action) => action.payload,
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
