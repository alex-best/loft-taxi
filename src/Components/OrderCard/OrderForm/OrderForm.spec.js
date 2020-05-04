import React from "react";
import OrderForm from "./OrderForm";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("OrderForm", () => {
    it("button is disabled when fields are empty", () => {
        const addresses = ["adr1", "adr2", "adr3", "adr4"];
        const { getByTestId } = render(<OrderForm addresses={addresses} isFetched={true} />);

        const btn = getByTestId("btn");

        expect(btn).toBeTruthy();
        expect(btn).toBeDisabled();
    });
});
