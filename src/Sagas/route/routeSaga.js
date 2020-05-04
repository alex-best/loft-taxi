import Api from '../../AppData/Api';
import { getRouteSuccessRequest, getRouteFailureRequest } from '../../Store/Route/actions';
import { call, put } from "redux-saga/effects";

export function* getRoute(action) {
    try {
        const result = yield call(Api.fetchRoute, action);

        if (result) {
            yield put(getRouteSuccessRequest(result));

            return;
        }

        yield put(getRouteFailureRequest('Не удалось получить данные по данному маршруту'));
    } catch (error) {
        yield put(getRouteFailureRequest('Не удалось получить данные по данному маршруту'));
    }
}