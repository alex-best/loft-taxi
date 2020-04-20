import { regSuccess, regFailure } from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const isLoggedIn = handleActions({
    [regSuccess]: () => true,
    [regFailure]: () => false
}, false)

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
}, null)

export default combineReducers({
    isLoggedIn,
    success,
    error,
    token
})