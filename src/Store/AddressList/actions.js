import { createAction } from 'redux-actions';

export const getAddressListRequest = createAction('GET_ADDRESS_LIST_REQUEST');
export const getAddressListSuccessRequest = createAction('GET_ADDRESS_LIST_SUCCESS_REQUEST');
export const getAddressListFailureRequest = createAction('GET_ADDRESS_LIST_FAILURE_REQUEST');