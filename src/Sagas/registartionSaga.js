import Api from "../AppData/Api";
import { call, put, select } from "redux-saga/effects";
import { regFailure } from "../Store/Signup/actions";
import { authSuccess } from "../Store/Login/actions";

export function* reg(action) {
    try {
        const result = yield call(Api.fetchRegRequest, action);
        if (result.error) {
            yield put(regFailure(result.error));

            return;
        }

        yield put(authSuccess(result));

        const authState = yield select((state) => state.authReducer);

        localStorage.setItem("auth", JSON.stringify(authState));
    } catch (error) {
        yield put(regFailure("Нет связи с сервером"));
    }
}
