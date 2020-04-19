import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./Store/rootReducer";
import { authMiddleware } from "./Store/auth/authMiddleware";
import { profileMiddleware } from "./Pages/ProfilePage/middleware";
import "./index.css";

const store = createStore(
    rootReducer,
    applyMiddleware(profileMiddleware, authMiddleware)
);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("root")
);
