import Api from "../../AppData/Api";
import { authSuccess, authFailure } from "../../Store/Login/actions";
import { call, put } from "redux-saga/effects";
import { getAdressList } from '../addressList/addressListSaga';
import { getCard } from '../payment/paymentSaga';

export function* auth(action) {
    try {
        const result = yield call(Api.fetchAuthRequest, action);
        if (result.error) {
            yield put(authFailure(result));

            return;
        }

        const actionToken = {
            payload: {
                token: result.token
            }
        }

        yield call(getAdressList);
        yield call(getCard, actionToken);

        const authState = {
            isLoggedIn: result.success,
            token: result.token
        }

        localStorage.setItem("userData", JSON.stringify(authState));

        yield put(authSuccess(result));
    } catch (error) {
        yield put(authFailure("Нет связи с сервером"));
    }
}

export function logout() {
    localStorage.removeItem("userData");
}
