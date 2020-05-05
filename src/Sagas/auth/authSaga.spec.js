import { auth } from "./authSaga";
import Api from "../../AppData/Api";
import recordSaga from "../../TestUtils/recordSaga";
import { authSuccess, authFailure } from "../../Store/Login/actions";
import { getAdressList } from "../addressList/addressListSaga";
import { getCard } from "../payment/paymentSaga";

jest.mock("../addressList/addressListSaga");
jest.mock("../payment/paymentSaga");

describe("authSaga:", () => {
    it("successful auth", async () => {
        const answer = {
            success: true,
            token: "test",
        };

        Api.fetchAuthRequest.mockImplementation(() => answer);

        getAdressList.mockImplementation(() => null);
        getCard.mockImplementation(() => null);

        const dispatched = await recordSaga(auth);

        expect(Api.fetchAuthRequest).toHaveBeenCalled();
        expect(dispatched).toContainEqual(authSuccess(answer));
    });

    it("failure auth", async () => {
        const answer = {
            error: "error message",
        };

        Api.fetchAuthRequest.mockImplementation(() => answer);

        const dispatched = await recordSaga(auth);

        expect(Api.fetchAuthRequest).toHaveBeenCalled();
        expect(dispatched).toContainEqual(authFailure(answer));
    });
});
