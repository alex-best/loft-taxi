import React from "react";
import LoginPage from "./LoginPage";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("LoginPage: ", () => {
    it("renders correctly", () => {
        const { queryAllByText } = render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );

        expect(queryAllByText("Войти")).toBeTruthy();
    });
});
