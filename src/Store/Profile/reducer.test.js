import { setCardRequest, failureRequest, setCardSuccessRequest, getCardSuccessRequest } from "./actions";
import { profileReducer } from "./reducer";

const initialState = {
    card: {
        cardNumber: "",
        expiryDate: "",
        cardName: "",
        cvc: "",
        success: null,
        error: null,
    },
};

describe("set/update card info request:", () => {
    it("set", () => {
        const action = {
            type: setCardRequest.toString(),
            payload: {
                cardNumber: "9999 8888 7777 6666",
                expiryDate: "04/20",
                cardName: "CARD HOLDER",
                cvc: "123",
            },
        };

        const newState = {
            card: {
                cardNumber: "9999 8888 7777 6666",
                expiryDate: "04/20",
                cardName: "CARD HOLDER",
                cvc: "123",
                success: null,
                error: null,
            },
        };

        const result = profileReducer(initialState, action);

        expect(result).toEqual(newState);
    });

    it("update", () => {
        const state = {
            cardNumber: "9999 9999 9999 9999",
            expiryDate: "01/01",
            cardName: "TEST",
            cvc: "123",
            success: null,
            error: null,
        };

        const action = {
            type: setCardRequest.toString(),
            payload: {
                cardNumber: "9999 8888 7777 6666",
                expiryDate: "04/20",
                cardName: "CARD HOLDER",
                cvc: "777",
            },
        };

        const {
            card: { cardNumber, expiryDate, cardName, cvc, success, error },
        } = profileReducer(state, action);

        expect(cardNumber).toEqual("9999 8888 7777 6666");
        expect(expiryDate).toEqual("04/20");
        expect(cardName).toEqual("CARD HOLDER");
        expect(cvc).toEqual("777");
        expect(success).toBeNull();
        expect(error).toBeNull();
    });
});

describe('success set/update/get card info request:', () => {
    it('set', () => {
        const action = {
            type: setCardSuccessRequest.toString(),
            payload: {
                success: true
            }
        }

        const result = profileReducer(initialState, action);

        expect(result.card.success).toBeTruthy();
    });

    it('get', () => {
        const action = {
            type: getCardSuccessRequest.toString(),
            payload: {
                success: true,
                id: '123'
            }
        }

        const result = profileReducer(initialState, action);

        expect(result.card.success).toBeTruthy();
        expect(result.card.id).toEqual('123');
    })
})

describe("failure request:", () => {
    it("set/get/update request failed", () => {
        const action = {
            type: failureRequest.toString(),
            payload: 'Error message'
        }

        const result = profileReducer(initialState, action);

        expect(result.card.success).toEqual(false);
        expect(result.card.error).toEqual('Error message');
    });
});

describe('unknown action.type passed', () => {
    it('unknown type', () => {
        const action = {
            type: 'ERROR TYPE'
        };

        const result = profileReducer(initialState, action);

        expect(result).toEqual(initialState);
    })
})
