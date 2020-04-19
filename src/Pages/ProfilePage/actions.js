import { createAction } from 'redux-actions';

export const setCardRequest = createAction('SET_CARD_INFO_REQUEST');
export const setCardSuccessRequest = createAction('SET_CARD_INFO_SUCCES_REQUEST');
export const getCardRequest = createAction('GET_CARD_INFO_REQUEST');
export const getCardSuccessRequest = createAction('GET_CARD_INFO_SUCCESS_REQUEST')
export const failureRequest = createAction('FAILURE_REQUEST');

