import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { getAddressListRequest, getAddressListSuccessRequest, getAddressListFailureRequest } from './actions';

const addresses = handleActions({
    [getAddressListSuccessRequest]: (state, action) => action.payload.addresses,
}, null)

const isLoading = handleActions({
    [getAddressListRequest]: () => true,
    [getAddressListSuccessRequest]: () => false,
    [getAddressListFailureRequest]: () => false
}, false)

const isFetched = handleActions({
    [getAddressListRequest]: () => false,
    [getAddressListSuccessRequest]: () => true,
    [getAddressListFailureRequest]: () => true
}, false)

export default combineReducers({
    addresses,
    isLoading,
    isFetched
})