import Api from "../AppData/Api";
import { failureRequest, getCardSuccessRequest, setCardSuccessRequest } from '../Store/Profile/actions';
import { call, put } from "redux-saga/effects";

export function* getCard(action) {
    try {
        const result = yield call(Api.fetchGetCardRequest, action.payload.token);

        if (result.error) {
            yield put(failureRequest(result.error))

            return;
        }

        yield put(getCardSuccessRequest(result));
    } catch (error) {
        yield put(failureRequest('Не удалось получить данные'));
    }
}

export function* setCard(action) {
    try {
        const result = yield call(Api.fetchSetCardRequest, action);

        if (result.error) {
            yield put(failureRequest(result.error));

            return;
        }

        yield put(setCardSuccessRequest(result));
    } catch (error) {
        yield put(failureRequest(error.error));
    }
}