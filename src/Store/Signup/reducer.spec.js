import signupReducer from './reducer';
import { regSuccess, regFailure } from './actions';

describe('Signup reducer:', () => {

    const state = {
        isLoggedIn: false,
        success: false,
        error: null,
        token: null
    };

    it('successful request', () => {
        const state = {
            error: true,
            token: null
        };

        const action = {
            type: regSuccess.toString(),
            payload: {
                success: true,
                token: 'test'
            }
        }

        const { isLoggedIn, token, success, error } = signupReducer(state, action);

        expect(isLoggedIn).toBeTruthy();
        expect(token).toEqual('test');
        expect(success).toBeTruthy();
        expect(error).toBeFalsy();
    })

    it('failure request', () => {
        const action = {
            type: regFailure.toString(),
            payload: {
                success: false,
                error: 'Error message'
            }
        }

        const { isLoggedIn, token, success, error } = signupReducer(state, action);

        expect(isLoggedIn).toBeFalsy();
        expect(token).toBeNull();
        expect(success).toBeFalsy();
        expect(error).toEqual('Error message');
    })

    it('unknown type passed', () => {
        const action = {
            type: 'UNKNOWN TYPE'
        }

        const result = signupReducer(state, action);

        expect(result).toEqual(state);
    })
})