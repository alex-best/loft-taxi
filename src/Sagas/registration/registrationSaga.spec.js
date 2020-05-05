import Api from "../../AppData/Api"
import recordSaga from "../../TestUtils/recordSaga";
import { reg } from './registrationSaga';
import { regFailure } from '../../Store/Signup/actions'
import { authSuccess } from '../../Store/Login/actions';

describe('registrationSaga:', () => {
    it('successful registration', async () => {
        const answer = {
            success: true,
            token: 'test'
        }

        Api.fetchRegRequest.mockImplementation(() => answer);

        const dispatched = await recordSaga(reg);

        expect(Api.fetchRegRequest).toHaveBeenCalled();
        expect(dispatched).toContainEqual(authSuccess(answer))
    })

    it('failure registration', async () => {
        const answer = {
            success: false,
            error: 'error message'
        }

        Api.fetchRegRequest.mockImplementation(() => answer);

        const dispatched = await recordSaga(reg);

        expect(Api.fetchRegRequest).toHaveBeenCalled();
        expect(dispatched).toContainEqual(regFailure(answer));
    })
})