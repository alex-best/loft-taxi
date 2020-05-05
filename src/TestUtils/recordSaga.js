import { runSaga } from "redux-saga";

export default async (saga, initialAction = null) => {
    const dispatched = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action),
        },
        saga,
        initialAction
    ).done;

    return dispatched;
};
