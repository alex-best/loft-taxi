import { getAdressList } from "./addressListSaga";
import Api from '../../AppData/Api';
import { getAddressListSuccessRequest, getAddressListFailureRequest } from '../../Store/AddressList/actions';
import recordSaga from '../../TestUtils/recordSaga';

describe('addressListSaga:', () => {
    it('successefull request', async () => {
        const addresses = ['test1', 'test2'];
        Api.fetchAddressList.mockImplementation(() => addresses);

        const dispatched = await recordSaga(getAdressList);
    
        expect(Api.fetchAddressList).toHaveBeenCalled();
        expect(dispatched).toContainEqual(getAddressListSuccessRequest(addresses));
    })

    it('failure request', async () => {
        Api.fetchAddressList.mockImplementation(() => null);

        const dispatched = await recordSaga(getAdressList);

        expect(Api.fetchAddressList).toHaveBeenCalled();
        expect(dispatched).toContainEqual(getAddressListFailureRequest('Не удалось получить данные с сервера'))
    })
})