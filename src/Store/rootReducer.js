import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { profileReducer } from '../Pages/ProfilePage/reducer';

export const rootReducer = combineReducers({
    authReducer,
    profileReducer
});