import { authReducer } from './authReducer';
import { authLogout, authSuccess, authFailure } from './authActions';

const initialState = {
    auth: {
        isLoggedIn: false,
        success: false,
        error: null,
        token: null
    }
};

describe('auth tests: ', () => {

    it('successful auth/registration', () => {
        const action = {
            type: authSuccess.toString(),
            payload: {
                isLoggedIn: true,
                success: true,
                token: 'test',
                error: null
            }
        };
    
        const result = authReducer(initialState, action);
        const { isLoggedIn, success, token, error } = result.auth;
    
        expect(success).toBeTruthy();
        expect(isLoggedIn).toBeTruthy();
        expect(token).toEqual('test');
        expect(error).toBeNull();
    })
    
    it('failure auth/registration', () => {
        const action = {
            type: authFailure.toString(),
            payload: {
                isLoggedIn: false,
                success: false,
                token: null,
                error: 'Error message'
            }
        };
    
        const result = authReducer(initialState, action);
    
        const { isLoggedIn, success, token, error } = result.auth;
    
        expect(isLoggedIn).toEqual(false);
        expect(success).toEqual(false);
        expect(token).toBeFalsy();
        expect(error).toEqual('Error message');
    })
})

describe('logout test: ', () => {

    it('logout', () => {
        const state = {
            auth: {
                isLoggedIn: true,
                success: true,
                error: null,
                token: 'test'
            }
        }
    
        const action = {
            type: authLogout.toString()
        }
    
        const result = authReducer(state, action);
    
        const { isLoggedIn, success, token, error } = result.auth;
    
        expect(isLoggedIn).toEqual(false);
        expect(success).toEqual(false);
        expect(token).toBeNull();
        expect(error).toBeNull();
    })
})

describe('unknown action.type passed', () => {
    it('unknown type', () => {
        const action = {
            type: 'UNKNOWN TYPE'
        }
    
        const result = authReducer(initialState, action);
    
        expect(result).toEqual(initialState);
    })
})



