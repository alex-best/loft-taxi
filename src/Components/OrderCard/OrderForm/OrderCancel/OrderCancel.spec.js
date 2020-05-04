import React from "react";
import OrderCancel from "./OrderCancel";
import { render, fireEvent } from "@testing-library/react";

describe("OrderCancel", () => {
    const callback = jest.fn();
    const mockClasses = { orderForm: {} };

    it("renders correctly", () => {
        const { getByText } = render(<OrderCancel classes={mockClasses} onCancelClick={callback} />);
        const btn = getByText("Отменить заказ");

        expect(btn).toBeTruthy();
    });

    it("callback is called", () => {
        const { getByText } = render(<OrderCancel classes={mockClasses} onCancelClick={callback} />);
        const btn = getByText("Отменить заказ");

        fireEvent.click(btn);

        expect(callback).toHaveBeenCalled();
    });
});
