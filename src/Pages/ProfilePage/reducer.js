import {
    setCardRequest,
    getCardSuccessRequest,
    failureRequest,
} from "./actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

const cardNumber = handleActions(
    {
        [setCardRequest]: (state, action) => action.payload.cardNumber,
        [getCardSuccessRequest]: (state, action) => action.payload.cardNumber,
        [failureRequest]: () => "",
    },
    ""
);

const expiryDate = handleActions(
    {
        [setCardRequest]: (state, action) => action.payload.expiryDate,
        [getCardSuccessRequest]: (state, action) => action.payload.expiryDate,
        [failureRequest]: () => "",
    },
    ""
);

const cardName = handleActions(
    {
        [setCardRequest]: (state, action) => action.payload.cardName,
        [getCardSuccessRequest]: (state, action) => action.payload.cardName,
        [failureRequest]: () => "",
    },
    ""
);

const cvc = handleActions(
    {
        [setCardRequest]: (state, action) => action.payload.cvc,
        [getCardSuccessRequest]: (state, action) => action.payload.cvc,
        [failureRequest]: () => "",
    },
    ""
);

const success = handleActions(
    {
        [setCardRequest]: () => false,
        [getCardSuccessRequest]: () => true,
        [failureRequest]: () => false,
    },
    false
);

const error = handleActions(
    {
        [setCardRequest]: () => false,
        [getCardSuccessRequest]: () => false,
        [failureRequest]: (state, action) => action.payload.error,
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
});
