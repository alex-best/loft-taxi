import addressReducer from './reducer';
import { getAddressListSuccessRequest, getAddressListFailureRequest } from './actions';

describe('AddressList reducer:', () => {
    it('successful request', () => {

        const state = {};
        const action = {
            type: getAddressListSuccessRequest.toString(),
            payload: {
                addresses: ['test', 'test2']
            }
        }

        const {addresses, isLoading, isFetched} = addressReducer(state, action);

        expect(isLoading).toEqual(false);
        expect(isFetched).toEqual(true);
        expect(addresses).toEqual(['test', 'test2']);
    })
})