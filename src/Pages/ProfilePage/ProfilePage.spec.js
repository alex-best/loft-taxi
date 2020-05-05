import React from "react";
import ProfilePage from "./ProfilePage";
import { render } from "@testing-library/react";

jest.mock("../../Components/Header/", () => jest.fn(() => null));

describe("ProfilePage: ", () => {
    it("render correctly", () => {
        const { getByText } = render(<ProfilePage />);

        expect(getByText("Профиль")).toBeTruthy();
    });
});
