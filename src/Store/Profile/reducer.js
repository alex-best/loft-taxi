import {
    setCardRequest,
    getCardSuccessRequest,
    failureRequest,
    setCardSuccessRequest,
    getCardRequest,
} from "./actions";
import { authLogout } from "../Login/actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
 
const cardNumber = handleActions(
    {
        [setCardRequest]: (state, action) => action.payload.cardNumber,
        [getCardSuccessRequest]: (state, action) => action.payload.cardNumber,
        [failureRequest]: () => "",
        [authLogout]: () => ''
    },
    ''
);

const expiryDate = handleActions(
    {
        [setCardRequest]: (state, action) => action.payload.expiryDate,
        [getCardSuccessRequest]: (state, action) => action.payload.expiryDate,
        [failureRequest]: () => "",
        [authLogout]: () => ''
    },
    ''
);

const cardName = handleActions(
    {
        [setCardRequest]: (state, action) => action.payload.cardName,
        [getCardSuccessRequest]: (state, action) => action.payload.cardName,
        [failureRequest]: () => "",
        [authLogout]: () => ''
    },
    ''
);

const cvc = handleActions(
    {
        [setCardRequest]: (state, action) => action.payload.cvc,
        [getCardSuccessRequest]: (state, action) => action.payload.cvc,
        [failureRequest]: () => "",
        [authLogout]: () => ''
    },
    ''
);

const success = handleActions(
    {
        [setCardRequest]: () => false,
        [setCardSuccessRequest]: () => true,
        [getCardSuccessRequest]: () => true,
        [failureRequest]: () => false,
        [authLogout]: () => false
    },
    false
);

const error = handleActions(
    {
        [setCardRequest]: () => false,
        [getCardSuccessRequest]: () => false,
        [failureRequest]: (state, action) => action.payload,
        [authLogout]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [setCardSuccessRequest]: () => true,
        [getCardSuccessRequest]: () => true,
        [failureRequest]: () => true,
        [authLogout]: () => false,
    },
    false
);

const isLoading = handleActions(
    {
        [getCardRequest]: () => true,
        [setCardSuccessRequest]: () => false,
        [getCardSuccessRequest]: () => false,
        [failureRequest]: () => false,
    },
    false
);

export default combineReducers({
    cardNumber,
    expiryDate,
    cardName,
    cvc,
    success,
    error,
    isFetched,
    isLoading,
});
