import React from "react";
import NavMenu from "./NavMenu";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../../Store/rootReducer";
import { BrowserRouter } from "react-router-dom";

describe("NavMenu:", () => {
    it("renders correctly", () => {
        const store = createStore(rootReducer);
        const { queryByText } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavMenu />
                </Provider>
            </BrowserRouter>
        );

        const mapBtn = queryByText("Карта");
        const profileBtn = queryByText("Профиль");
        const logoutBtn = queryByText("Выйти");

        expect(mapBtn).toBeTruthy();
        expect(profileBtn).toBeTruthy();
        expect(logoutBtn).toBeTruthy();
    });
});
