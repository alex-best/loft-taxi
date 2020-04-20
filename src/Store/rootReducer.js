import { combineReducers } from 'redux';
import authReducer from '../Pages/LoginPage/reducer';
import regReducer from '../Pages/SignupPage/reducer';
import profileReducer from '../Pages/ProfilePage/reducer';

export const rootReducer = combineReducers({
    authReducer,
    regReducer,
    profileReducer
});