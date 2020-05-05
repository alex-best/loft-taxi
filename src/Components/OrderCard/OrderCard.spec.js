import React from "react";
import { render } from "@testing-library/react";
import OrderCard from "./OrderCard";
import { BrowserRouter } from "react-router-dom";

describe("OrderCard", () => {
    describe("render correctly", () => {
        it("without payment card", () => {
            const { getByText } = render(
                <BrowserRouter>
                    <OrderCard />
                </BrowserRouter>
            );
            expect(getByText("Заполнить данные")).toBeTruthy();
        });
    });
});
