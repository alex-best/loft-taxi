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
import "./index.css";

const store = createStore(
    rootReducer,
    applyMiddleware(authMiddleware)
);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        {/* <React.StrictMode> */}
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        {/* </React.StrictMode> */}
    </MuiThemeProvider>,
    document.getElementById("root")
);
