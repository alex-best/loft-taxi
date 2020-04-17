import { authLogout, authSuccess, authFailure } from './authActions';

const getInitialState = () => {
    const initialState = {
        auth: {
            isLoggedIn: false,
            success: null,
            error: null,
            token: null
        }
    };

    const stateFromLocalStorage = JSON.parse(localStorage.getItem('auth'));

    return stateFromLocalStorage || initialState;
}

export const authReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case authSuccess.toString():
            return {
                ...state,
                auth: {
                    isLoggedIn: true,
                    success: action.payload.success,
                    error: null,
                    token: action.payload.token
                }
            }
        case authFailure.toString():
            return {
                ...state,
                auth: {
                    isLoggedIn: false,
                    success: false,
                    error: action.payload.error,
                    token: null
                }
            }
        case authLogout.toString(): {
            return {
                ...state,
                auth: {
                    isLoggedIn: false,
                    success: false,
                    error: null,
                    token: null
                }
            }
        }
        default:
            return state;
    }
}