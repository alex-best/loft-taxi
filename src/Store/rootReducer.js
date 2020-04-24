import { combineReducers } from 'redux';
import auth from './Login/reducer';
import reg from './Signup/reducer';
import profile from './Profile/reducer';
import addressList from './AddressList/reducer';
import route from './Route/reducer';

export const rootReducer = combineReducers({
    auth,
    reg,
    profile,
    addressList,
    route
});