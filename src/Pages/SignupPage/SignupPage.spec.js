import React from "react";
import SignupPage from "./SignupPage";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("SignupPage: ", () => {
    it("render correctly", () => {
        const { getByText } = render(
            <BrowserRouter>
                <SignupPage />
            </BrowserRouter>
        );

        expect(getByText("Уже зарегистрированы?")).toBeTruthy();
    });
});
