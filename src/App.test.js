import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./Store/rootReducer";

describe('App: ', () => {
    const store = createStore(rootReducer);
    it("renders correctly", () => {
        const { container } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        );

        expect(container.innerHTML).toMatch('Войти');
    });

    it('route testing', () => {
        const { container, getByText } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        );

        expect(container.innerHTML).toMatch('Войти');

        const regLink = getByText('Зарегистрируйтесь');
        expect(regLink).toBeTruthy();

        fireEvent.click(regLink);

        expect(container.innerHTML).toMatch('Зарегистрироваться');

        const authLink = getByText('Войти');
        expect(authLink).toBeTruthy();

        fireEvent.click(authLink);
        
        expect(container.innerHTML).toMatch('Войти');
    })

})


