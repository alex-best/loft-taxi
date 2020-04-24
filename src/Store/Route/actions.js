import { createAction } from 'redux-actions';

export const getRouteRequest = createAction('GET_ROUTE');
export const getRouteSuccessRequest = createAction('GET_ROUTE_SUCCESS_REQUEST');
export const getRouteFailureRequest = createAction('GET_ROUTE_FAILURE_REQUEST');
export const clearRoute = createAction('CLEAR_ROUTE');