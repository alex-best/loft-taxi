import {
    setCardRequest,
    failureRequest,
    setCardSuccessRequest,
    getCardSuccessRequest,
} from "./actions";
import profileReducer from "./reducer";

const initialState = {
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
    success: false,
    error: false,
    isFetched: false,
    isLoading: false
};

describe("Profile reducer: ", () => {
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
                cardNumber: "9999 8888 7777 6666",
                expiryDate: "04/20",
                cardName: "CARD HOLDER",
                cvc: "123",
                success: false,
                error: false,
                isFetched: false,
                isLoading: false,
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
                success: true,
                error: false,
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
                cardNumber,
                expiryDate,
                cardName,
                cvc,
                success,
                error,
            } = profileReducer(state, action);

            expect(cardNumber).toEqual("9999 8888 7777 6666");
            expect(expiryDate).toEqual("04/20");
            expect(cardName).toEqual("CARD HOLDER");
            expect(cvc).toEqual("777");
            expect(success).toBeFalsy();
            expect(error).toBeFalsy();
        });
    });

    describe("success set/update/get card info request:", () => {
        it("set", () => {
            const action = {
                type: setCardSuccessRequest.toString(),
                payload: {
                    success: true,
                },
            };

            const result = profileReducer(initialState, action);

            expect(result.success).toBeTruthy();
        });

        it("get", () => {
            const action = {
                type: getCardSuccessRequest.toString(),
                payload: {
                    success: true,
                },
            };

            const result = profileReducer(initialState, action);

            expect(result.success).toBeTruthy();
        });
    });

    describe("failure request:", () => {
        it("set/get/update request failed", () => {
            const action = {
                type: failureRequest.toString(),
                payload: "Error message",
            };

            const result = profileReducer(initialState, action);

            expect(result.success).toEqual(false);
            expect(result.error).toEqual("Error message");
        });
    });

    describe("unknown action.type passed", () => {
        it("unknown type", () => {
            const action = {
                type: "ERROR TYPE",
            };

            const result = profileReducer(initialState, action);

            expect(result).toEqual(initialState);
        });
    });
});
