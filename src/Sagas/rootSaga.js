import { authRequest, authLogout } from "../Store/Login/actions";
import { regRequest } from "../Store/Signup/actions";
import { getCardRequest, setCardRequest } from '../Store/Profile/actions';
import { getAddressListRequest } from '../Store/AddressList/actions';
import { getRouteRequest } from '../Store/Route/actions';
import { auth, logout } from "./authSaga";
import { reg } from "./registartionSaga";
import { getCard, setCard } from './paymentSaga';
import { getAdressList } from './addressListSaga';
import { getRoute } from './routeSaga';
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