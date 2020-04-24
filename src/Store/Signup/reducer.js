import { regSuccess, regFailure } from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

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

const isLoggedIn = handleActions({
    [regSuccess]: () => true,
    [regFailure]: () => false
}, getInitialState().isLoggedIn)

const success = handleActions({
    [regSuccess]: () => true,
    [regFailure]: () => false
}, false)

const error = handleActions({
    [regSuccess]: () => null,
    [regFailure]: (state, action) => action.payload
}, null)

const token = handleActions({
    [regSuccess]: (state, action) => action.payload.token,
    [regFailure]: () => null
}, getInitialState().token)

export default combineReducers({
    isLoggedIn,
    success,
    error,
    token
})