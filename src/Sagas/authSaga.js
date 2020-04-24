import Api from "../AppData/Api";
import { authSuccess, authFailure } from "../Store/Login/actions";
import { call, put, select } from "redux-saga/effects";

export function* auth(action) {
    try {
        const result = yield call(Api.fetchAuthRequest, action);
        if (result.error) {
            yield put(authFailure(result.error));

            return;
        }
        yield put(authSuccess(result));

        const authState = yield select((state) => {
            return {
                isLoggedIn: state.auth.isLoggedIn,
                token: state.auth.token
            }
        });

        localStorage.setItem("userData", JSON.stringify(authState));
    } catch (error) {
        yield put(authFailure("Нет связи с сервером"));
    }
}

export function logout() {
    localStorage.removeItem("userData");
}
