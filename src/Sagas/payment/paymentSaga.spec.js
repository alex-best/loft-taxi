import Api from '../../AppData/Api';
import { getCard, setCard } from "./paymentSaga";
import recordSaga from '../../TestUtils/recordSaga';
import { getCardSuccessRequest, failureRequest, setCardSuccessRequest } from '../../Store/Profile/actions';

jest.mock("../../AppData/Api");

describe("paymentSaga:", () => {
    describe("get request:", () => {
        it("successful", async () => {
            const answer = {
                id: "rec4NwqbXyWY2Ju7E",
                cardNumber: "0000000000000000",
                expiryDate: "20",
                cardName: "fr",
                cvc: "000",
            };

            Api.fetchGetCardRequest.mockImplementation(() => answer);

            const action = {
                payload: {
                    token: 'test'
                }
            }

            const dispatched = await recordSaga(getCard, action);

            expect(Api.fetchGetCardRequest).toHaveBeenCalled();
            expect(dispatched).toContainEqual(getCardSuccessRequest(answer))
        });

        it("failure", async () => {
            const answer = {
                success: false,
                error: 'error message'
            }

            Api.fetchGetCardRequest.mockImplementation(() => answer);

            const action = {
                payload: {
                    token: 'test'
                }
            }

            const dispatched = await recordSaga(getCard, action);

            expect(Api.fetchGetCardRequest).toHaveBeenCalled();
            expect(dispatched).toContainEqual(failureRequest(answer))
        });
    });

    describe("set request:", () => {
        it("successful", async () => {
            const answer = {
                success: true
            }

            Api.fetchSetCardRequest.mockImplementation(() => answer);

            const dispatched = await recordSaga(setCard);

            expect(Api.fetchSetCardRequest).toHaveBeenCalled();
            expect(dispatched).toContainEqual(setCardSuccessRequest(answer));
        });

        it("failure", async () => {
            const answer = {
                success: false,
                error: 'error message'
            }

            Api.fetchSetCardRequest.mockImplementation(() => answer);

            const dispatched = await recordSaga(setCard);

            expect(Api.fetchSetCardRequest).toHaveBeenCalled();
            expect(dispatched).toContainEqual(failureRequest(answer));
        });
    });
});
