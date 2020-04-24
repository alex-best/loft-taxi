import Api from '../AppData/Api';
import { getAddressListSuccessRequest,  getAddressListFailureRequest} from '../Store/AddressList/actions';
import { call, put } from "redux-saga/effects";

export function* getAdressList() {
    try {
        const result = yield call(Api.fetchAddressList);

        if (result) {
            yield put(getAddressListSuccessRequest(result))

            return;
        }

        yield put(getAddressListFailureRequest('Не удалось получить данные с сервера'));

    } catch (error) {
        yield put(getAddressListFailureRequest('Не удалось получить данные с сервера'));
    }
}