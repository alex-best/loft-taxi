import { createAction } from "redux-actions";

export const authRequest = createAction(
        "AUTH_REQUEST",
        auth => auth,
        (auth, meta) => meta
    );
export const authSuccess = createAction("AUTH_SUCCESS");
export const authFailure = createAction("AUTH_FAILURE");
export const authLogout = createAction("LOGOUT");
