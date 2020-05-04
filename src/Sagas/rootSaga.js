import { authRequest, authLogout } from "../Store/Login/actions";
import { regRequest } from "../Store/Signup/actions";
import { getCardRequest, setCardRequest } from '../Store/Profile/actions';
import { getAddressListRequest } from '../Store/AddressList/actions';
import { getRouteRequest } from '../Store/Route/actions';
import { auth, logout } from "./auth/authSaga";
import { reg } from "./registration/registrationSaga";
import { getCard, setCard } from './payment/paymentSaga';
import { getAdressList } from './addressList/addressListSaga';
import { getRoute } from './route/routeSaga';
import { takeEvery, takeLatest } from "redux-saga/effects";

export function* rootSaga() {
    yield takeLatest(authRequest, auth);
    yield takeLatest(regRequest, reg);
    yield takeLatest(getCardRequest, getCard)
    yield takeLatest(setCardRequest, setCard)
    yield takeEvery(authLogout, logout);
    yield takeLatest(getAddressListRequest, getAdressList);
    yield takeLatest(getRouteRequest, getRoute);
}