import React from "react";
import SignupForm from "./SignupForm";
import { render, fireEvent } from "@testing-library/react";

describe("SignupForm: ", () => {
    const mockSubmitHandler = jest.fn();

    it("renders correctly", () => {
        const { getByText } = render(
            <SignupForm onSubmit={mockSubmitHandler} />
        );

        expect(getByText("Адрес электронной почты")).toBeTruthy();
        expect(getByText("Имя")).toBeTruthy();
        expect(getByText("Фамилия")).toBeTruthy();
        expect(getByText("Пароль")).toBeTruthy();
    });

    it("validator work", () => {
        const { getByTestId } = render(
            <SignupForm onSubmit={mockSubmitHandler} />
        );
        const firstNameInput = getByTestId("firstName");
        const lastNameInput = getByTestId("lastName");
        const emailInput = getByTestId("email");
        const passwordInput = getByTestId("password");

        fireEvent.change(firstNameInput, { target: { value: "123" } });
        fireEvent.change(lastNameInput, { target: { value: "123" } });
        fireEvent.change(emailInput, { target: { value: "Invalid text" } });
        fireEvent.change(passwordInput, { target: { value: "123" } });

        expect(mockSubmitHandler).not.toHaveBeenCalled();
    });

    it("test submit", () => {
        const { getByTestId } = render(
            <SignupForm onSubmit={mockSubmitHandler} />
        );
        const form = getByTestId("signup-form");
        const firstNameInput = getByTestId("firstName");
        const lastNameInput = getByTestId("lastName");
        const emailInput = getByTestId("email");
        const passwordInput = getByTestId("password");

        fireEvent.change(firstNameInput, { target: { value: "FirstName" } });
        fireEvent.change(lastNameInput, { target: { value: "LastName" } });
        fireEvent.change(emailInput, { target: { value: "test@test.com" } });
        fireEvent.change(passwordInput, { target: { value: "Password" } });

        fireEvent.submit(form);

        expect(mockSubmitHandler).toHaveBeenCalled();
    });
});
