import { getRouteSuccessRequest, getRouteFailureRequest, clearRoute } from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const coords = handleActions({
    [getRouteSuccessRequest]: (state, action) => action.payload,
    [getRouteFailureRequest]: () => null,
    [clearRoute]: () => null
}, null)

export default combineReducers({
    coords
})