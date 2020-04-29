import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { getAddressListSuccessRequest } from './actions';

const addresses = handleActions({
    [getAddressListSuccessRequest]: (state, action) => action.payload.addresses
}, null)

export default combineReducers({
    addresses
})