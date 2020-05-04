import React from "react";
import Input from "./Input";
import { render } from "@testing-library/react";

describe("Input:", () => {
    it("render with error message", () => {
        const props = {
            input: {},
            meta: {
                error: "Invalid text",
                visited: true,
                active: false,
            },
            label: "TEST",
            dataTestId: "testInputId",
        };

        const { getByTestId, getByText } = render(<Input {...props} />);

        const input = getByTestId("testInputId");
        const errorMessage = getByText("Invalid text");

        expect(input).toBeTruthy();
        expect(errorMessage).toBeTruthy();
    });
});
