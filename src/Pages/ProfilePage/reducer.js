import { setCardRequest, setCardSuccessRequest, getCardSuccessRequest, failureRequest } from './actions';

const initialState = {
    card: {
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
        success: null,
        error: null
    }
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCardRequest.toString():
            const { cardNumber, expiryDate, cardName, cvc } = action.payload;
            return {
                card: {
                    cardNumber,
                    expiryDate,
                    cardName,
                    cvc,
                    success: null,
                    error: null
                }
            }
        case setCardSuccessRequest.toString():
            return {
                card: {
                    ...state.card,
                    success: true,
                    error: null
                }
            }
        case getCardSuccessRequest.toString():
            return {
                card: {
                    ...state.card,
                    success: true,
                    error: null,
                    cardNumber: action.payload.cardNumber,
                    expiryDate: action.payload.expiryDate,
                    cardName: action.payload.cardName,
                    cvc: action.payload.cvc,
                    id: action.payload.id
                }
            }
        case failureRequest.toString():
            return {
                card: {
                    ...state.card,
                    success: false,
                    error: action.payload
                }
            }
        default:
            return state
    }
}