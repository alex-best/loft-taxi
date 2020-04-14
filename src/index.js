import React from "react";
import ReactDOM from "react-dom";
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <React.StrictMode>
            <AuthProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
            </AuthProvider>
        </React.StrictMode>
    </MuiThemeProvider>,
    document.getElementById("root")
);
