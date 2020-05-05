import Api from '../../AppData/Api';
import recordSaga from '../../TestUtils/recordSaga';
import { getRoute } from './routeSaga';
import { getRouteSuccessRequest } from '../../Store/Route/actions';

describe('routeSaga:', () => {
    it('successful request', async () => {
        const answer = [['1', '2'], ['3', '4']];
        
        Api.fetchRoute.mockImplementation(() => answer);

        const dispatched = await recordSaga(getRoute);

        expect(Api.fetchRoute).toHaveBeenCalled();
        expect(dispatched).toContainEqual(getRouteSuccessRequest(answer));
    })
})