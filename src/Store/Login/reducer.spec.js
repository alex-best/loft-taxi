import authReducer from "./reducer";
import { authLogout, authSuccess, authFailure } from "./actions";

const initialState = {
    isLoggedIn: false,
    success: false,
    error: null,
    token: null,
};

describe("Login reducer: ", () => {
    describe("auth tests: ", () => {
        it("successful auth/registration", () => {
            const action = {
                type: authSuccess.toString(),
                payload: {
                    success: true,
                    token: "test",
                },
            };

            const result = authReducer(initialState, action);
            const { isLoggedIn, success, token, error } = result;

            expect(success).toBeTruthy();
            expect(isLoggedIn).toBeTruthy();
            expect(token).toEqual("test");
            expect(error).toBeFalsy();
        });

        it("failure auth/registration", () => {
            const action = {
                type: authFailure.toString(),
                payload: {
                    success: false,
                    error: "Error message",
                },
            };

            const result = authReducer(initialState, action);

            const { isLoggedIn, success, token, error } = result;

            expect(isLoggedIn).toEqual(false);
            expect(success).toEqual(false);
            expect(token).toBeFalsy();
            expect(error).toEqual("Error message");
        });
    });

    describe("logout test: ", () => {
        it("logout", () => {
            const state = {
                isLoggedIn: true,
                success: true,
                error: null,
                token: "test",
            };

            const action = {
                type: authLogout.toString(),
            };

            const result = authReducer(state, action);

            const { isLoggedIn, success, token, error } = result;

            expect(isLoggedIn).toEqual(false);
            expect(success).toEqual(false);
            expect(token).toBeNull();
            expect(error).toBeNull();
        });
    });

    describe("unknown action.type passed", () => {
        it("unknown type", () => {
            const action = {
                type: "UNKNOWN TYPE",
            };

            const result = authReducer(initialState, action);

            expect(result).toEqual(initialState);
        });
    });
});
